export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Você é um analista quantitativo especializado na B3, com expertise em:
- Análise macroeconômica correlacionada (DI1/SELIC, Ibovespa setores, S&P500, commodities)
- Leitura de fluxo e correlações entre ativos
- Padrões de candles japoneses e price action
- Operação em mini contratos: WIN (Mini Índice) e WDO (Mini Dólar)

Ao receber dados de mercado, você deve:
1. Avaliar o contexto macro (juros SELIC vs IFNC/IMAT, correlação SP500 com Ibovespa, Brent/Ouro como risk-off/risk-on)
2. Identificar o bias direcional (alta/baixa/neutro) para WIN e WDO separadamente
3. Sugerir o melhor ponto de entrada com base nos níveis técnicos inferidos
4. Calcular stop e alvos com relação risco/retorno mínimo de 1:2

RESPONDA SEMPRE NO SEGUINTE FORMATO JSON (sem markdown, apenas JSON puro):
{
  "bias_macro": "texto descrevendo o cenário macro em 2-3 frases",
  "correlacoes": ["correlação 1", "correlação 2", "correlação 3"],
  "padroes_candle": "descrição dos padrões identificados com base nos dados",
  "WIN": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "frase curta"
  },
  "WDO": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "frase curta"
  }
}`;

async function fetchYahoo(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=2d`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(8000)
  });
  if (!res.ok) throw new Error('Yahoo HTTP ' + res.status);
  const data = await res.json();
  const result = data.chart?.result?.[0];
  if (!result) throw new Error('Sem dados para ' + symbol);
  const meta = result.meta;
  const preco = meta.regularMarketPrice || meta.previousClose;
  const prev = meta.previousClose || meta.chartPreviousClose;
  const variacao = prev ? ((preco - prev) / prev) * 100 : 0;
  return { preco, variacao };
}

async function fetchSELIC() {
  try {
    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/2?formato=json';
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const text = await res.text();
    if (!res.ok || text.trim().startsWith('<')) throw new Error('BCB indisponivel');
    const data = JSON.parse(text);
    const atual = parseFloat(data[data.length - 1].valor);
    const anterior = parseFloat(data[data.length - 2].valor);
    const variacao = anterior !== 0 ? ((atual - anterior) / anterior) * 100 : 0;
    return { preco: atual, variacao, fonte: 'Banco Central' };
  } catch(e) {
    try {
      const url2 = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/2?formato=json';
      const res2 = await fetch(url2, { signal: AbortSignal.timeout(8000) });
      const text2 = await res2.text();
      if (text2.trim().startsWith('<')) throw new Error('HTML');
      const data2 = JSON.parse(text2);
      const atual = parseFloat(data2[data2.length - 1].valor);
      const anterior = parseFloat(data2[data2.length - 2].valor);
      const variacao = anterior !== 0 ? ((atual - anterior) / anterior) * 100 : 0;
      return { preco: atual, variacao, fonte: 'BCB SELIC meta' };
    } catch(e2) {
      return { preco: 13.75, variacao: 0, fonte: 'SELIC ref.' };
    }
  }
}

async function coletarDados() {
  const ativos = [
    { id: 'IFNC',  nome: 'IFNC',    symbol: 'IFNC.SA',  uni: 'pts' },
    { id: 'IMAT',  nome: 'IMAT',    symbol: 'IMAT.SA',  uni: 'pts' },
    { id: 'SP500', nome: 'S&P 500', symbol: '^GSPC',    uni: 'pts' },
    { id: 'BRENT', nome: 'Brent',   symbol: 'BZ=F',     uni: 'usd' },
    { id: 'OURO',  nome: 'Ouro',    symbol: 'GLD',      uni: 'usd' },
    { id: 'DI1',   nome: 'DI1F29',  symbol: 'DI1F29.SA',uni: 'pts' },
  ];

  const resultado = {};
  const erros = [];

  const resultados = await Promise.allSettled([
    ...ativos.map(a => fetchYahoo(a.symbol).then(d => ({ ...a, ...d, fonte: 'Yahoo Finance' }))),
  ]);

  resultados.forEach(r => {
    if (r.status === 'fulfilled') {
      resultado[r.value.id] = r.value;
    } else {
      erros.push(r.reason?.message || 'erro desconhecido');
    }
  });

  // Se DI1 falhar no Yahoo, tenta BCB
  if (!resultado['DI1']) {
    try {
      const selic = await fetchSELIC();
      resultado['DI1'] = { id: 'DI1', nome: 'DI1/SELIC', uni: '%', ...selic };
    } catch(e) {
      erros.push('DI1: ' + e.message);
    }
  }

  return { dados: resultado, erros };
}

export default async function handler(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const action = body.action || 'analyze';

    if (action === 'coletar') {
      const { dados, erros } = await coletarDados();
      return new Response(JSON.stringify({ dados, erros }), { headers: corsHeaders });
    }

    if (action === 'analyze') {
      const { dados, erros } = await coletarDados();

      const linhas = Object.values(dados).map(d => {
        const v = d.variacao >= 0 ? `+${d.variacao.toFixed(2)}` : d.variacao.toFixed(2);
        const val = d.uni === '%' ? `${d.preco.toFixed(2)}%` : d.uni === 'usd' ? `U$ ${d.preco.toFixed(2)}` : Math.round(d.preco).toLocaleString('pt-BR');
        return `${d.nome}: ${val} (${v}%) via ${d.fonte}`;
      });

      const contexto = `DADOS DE MERCADO — ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })} (BRT)\n\n${linhas.join('\n')}\n\nAnalise o contexto macroeconômico e forneça os melhores pontos de entrada para WIN e WDO.`;

      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: contexto }]
        }),
      });

      const claudeData = await claudeRes.json();
      return new Response(JSON.stringify({ dados, erros, claude: claudeData }), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: 'action inválida' }), { status: 400, headers: corsHeaders });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
}
