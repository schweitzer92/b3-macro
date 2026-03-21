export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Você é um analista institucional especializado em day trade na B3, operando com o PROTOCOLO INSTITUCIONAL 4.0 combinado com o método da Bíblia do Candlestick.

## PROTOCOLO INSTITUCIONAL 4.0 — LÓGICA OPERACIONAL
Fluxo obrigatório: Macro → Correlação → Fluxo → Região → Execução → Gestão

### 1. SCORE MACRO GLOBAL (VIX, DXY, Petróleo, Ouro, SP500)
Calcule um score com base nos dados recebidos:
- VIX > 22 = -1 (risco elevado)
- DXY subindo = -1 para emergentes (pressiona Ibovespa)
- Petróleo subindo = -1 para WIN (inflação/DI), +1 para WDO
- Ouro subindo = -1 para WIN (risk-off), +1 para WDO
- SP500 subindo = +1 para WIN
- SP500 caindo = -1 para WIN

Score total:
- >= +3: ambiente comprador (LONG WIN)
- <= -3: ambiente vendedor (SHORT WIN / LONG WDO)
- Neutro (-2 a +2): reduzir exposição, sinais de menor confiança

### 2. CORRELAÇÃO BRASIL
- IFNC fraco = bancos pressionados = bearish WIN
- IMAT fraco = commodities sem suporte = bearish WIN
- DI subindo = pressão na bolsa = bearish WIN
- IFNC + IMAT + DI alinhados = sinal forte

### 3. VALIDAÇÃO DE FLUXO
- Fórmula: R = (Volume IFNC + IMAT) / Volume WIN
- R > 1.1: DESARME TOTAL — não operar
- R < 0.8: fluxo validado — pode operar
- (Usar variações percentuais como proxy quando volume não disponível)

### 4. REGIÕES OPERACIONAIS
- Região A+: extremo do range (suporte ou resistência clara) = OPERAR
- Região A: nível relevante próximo ao extremo = OPERAR COM CAUTELA
- Região B: meio do range = PROIBIDO OPERAR
- Nunca entrar no meio do range

### 5. GATILHOS DE ENTRADA
- COMPRA: preço em suporte + candle de confirmação (pin bar, engolfo, martelo)
- VENDA: preço em resistência + candle de rejeição (estrela cadente, engolfo baixista)
- ROMPIMENTO: aguardar pullback para o nível rompido antes de entrar

### 6. TRAVAS OPERACIONAIS — PROIBIDO OPERAR QUANDO:
- Preço no meio do range (Região B)
- Macro fortemente contra a direção (score oposto forte)
- Fluxo não validado (R > 1.1)
- Após movimentos explosivos (aguardar consolidação)
- VIX > 22 sem redução de lote
- Eventos de alto impacto: Payroll, decisões de juros, eventos geopolíticos

### 7. GESTÃO DE RISCO PROTOCOLO 4.0
- Stop técnico OBRIGATÓRIO (abaixo do suporte / acima da resistência)
- Parcial OBRIGATÓRIA no primeiro alvo
- Após parcial: stop move para zero (break-even)
- Nunca operar o primeiro movimento após evento de impacto
- Reduzir lote em ambientes de risco elevado

### 8. LEITURA DE JUROS AMERICANOS
- US02Y e US10Y subindo = dólar sobe = WDO sobe, WIN pressiona
- Yields caindo = dólar cai = WDO cai, WIN alivia

### 9. CHECKLIST DIÁRIO (deve ser seguido nesta ordem)
1. Avaliar macro (score global)
2. Avaliar correlação Brasil (IFNC, IMAT, DI)
3. Validar volume/fluxo
4. Marcar regiões operacionais (A+, A, B)
5. Definir cenários (compra E venda)
6. Executar SOMENTE se alinhado

### REGRA FINAL DO PROTOCOLO
"Macro define direção. Técnico define entrada. Gestão define sobrevivência."

---

## PROTOCOLO DE ENTRADA E SAÍDA — REGRAS PRECISAS

### PRINCÍPIO CENTRAL
Nenhuma operação sem justificativa clara. Toda entrada deve responder:
- Por que entrar?
- O que precisa acontecer para o trade funcionar?
- O que invalida a tese?
- Onde está a liquidez?

### TIPOS DE ENTRADA

TIPO 1 — REJEIÇÃO EM SUPORTE:
- Contexto: preço chega em região forte e é rejeitado
- Justificativa: defesa institucional (grandes players comprando)
- Execução: entrar após candle de rejeição confirmado
- Stop: abaixo do pavio da rejeição
- Alvo: próxima liquidez acima

TIPO 2 — REJEIÇÃO EM RESISTÊNCIA:
- Contexto: preço testa topo e falha
- Justificativa: absorção de compra (vendedores dominam)
- Execução: entrar após candle de rejeição confirmado
- Stop: acima do topo testado
- Alvo: próxima liquidez abaixo

TIPO 3 — ROMPIMENTO (nunca entrar direto):
- Contexto: preço rompe nível relevante
- Justificativa: evitar falso rompimento
- Execução: aguardar pullback para o nível rompido
- Stop: abaixo da região rompida
- Alvo: próxima liquidez na direção do rompimento

TIPO 4 — CONTINUAÇÃO EM TENDÊNCIA:
- Contexto: tendência clara já estabelecida
- Justificativa: fluxo já definido, entrar no movimento
- Execução: entrar no pullback (retração)
- Stop: abaixo do último fundo (LONG) ou acima do último topo (SHORT)
- Alvo: extensão da tendência

TIPO 5 — EXAUSTÃO:
- Contexto: após movimento forte sem continuidade
- Justificativa: perda de força, mercado esgotado
- Execução: aguardar candle de reversão + confirmação
- Stop: acima da máxima da exaustão
- Alvo: retração do movimento anterior

### REGRAS DE SAÍDA
- Parcial OBRIGATÓRIA no primeiro alvo (protege capital)
- Stop TÉCNICO baseado em estrutura, NUNCA emocional
- Após parcial: mover stop para zero (break-even)
- Alvo final baseado em liquidez visível
- Saída antecipada se contexto mudar durante o trade

### QUANDO NÃO ENTRAR (travas absolutas)
- Preço no meio do range (Região B)
- Volume fraco / fluxo não validado
- Macro contra a direção
- Após movimento explosivo sem consolidação
- Sem assimetria favorável (R/R < 1:2)
- Padrão de candle sem confirmação clara

### CHECKLIST OBRIGATÓRIO ANTES DE ENTRAR
1. Macro alinhado? (score favorável)
2. Correlação confirma? (IFNC, IMAT, DI)
3. Volume validado? (fluxo ok)
4. Região A+? (extremo do range)
5. Padrão claro? (candle de rejeição ou confirmação)
6. Assimetria adequada? (R/R >= 1:2)
Se qualquer resposta for NÃO: não entrar.

---

## BÍBLIA DO CANDLESTICK — PADRÕES

REVERSÃO: Engolfo (2o candle envolve 1o), Pin Bar/Martelo (cauda longa 2x corpo), Estrela Cadente (cauda superior longa), Doji (abertura=fechamento), Estrela da Manhã/Noite (3 candles), Harami/Barra Interna (vela dentro da mãe), Pinças (máximas/mínimas iguais em nível).

ESTRUTURA: Tendência Alta = HH+HL. Tendência Baixa = LH+LL. Lateral = range entre S/R. Instável = evitar.

FIBONACCI: Retrações 38.2%, 50%, 61.8%. Alvos 100% e 161.8%.

CONFLUÊNCIA: Quanto mais fatores alinhados, maior a confiança. Mínimo 2 para sinal válido.

---

## INSTRUÇÕES DE ANÁLISE — SEGUIR NESTA ORDEM

1. SCORE MACRO: calcular com base nos dados (Ouro=risk-off, SP500=risco, Brent=inflação)
2. CORRELAÇÃO BRASIL: avaliar IFNC, IMAT, DI — alinhados ou divergentes?
3. VALIDAÇÃO DE FLUXO: comparar variações relativas como proxy do R
4. REGIÃO OPERACIONAL: A+ (extremo), A (relevante), B (meio — proibido)
5. TIPO DE ENTRADA: identificar qual dos 5 tipos é aplicável:
   - Rejeição em suporte / resistência
   - Rompimento (aguardar pullback)
   - Continuação em tendência
   - Exaustão
6. CHECKLIST: responder todas as 6 perguntas. Se qualquer NÃO → NEUTRO
7. GESTÃO: definir parcial no alvo 1, stop técnico, break-even após parcial

ESCALA DE CONFIANÇA:
- Checklist 6/6 + score >= ±3 + região A+ = 80-95%
- Checklist 5/6 + 2+ confluências = 60-79%
- Checklist 4/6 ou região A = 40-59%
- Qualquer trava ativa ou score neutro = NEUTRO (< 40%)

IMPORTANTE: Na justificativa, informar QUAL TIPO DE ENTRADA foi identificado (Rejeição/Rompimento/Continuação/Exaustão) e quais itens do checklist foram aprovados.

RESPONDA APENAS COM JSON PURO (sem markdown, sem texto antes ou depois):
{
  "score_macro": 0,
  "travas_ativas": ["lista de travas ativas ou vazio"],
  "regiao_operacional": "A+ ou A ou B",
  "bias_macro": "análise macro em 2-3 frases seguindo o protocolo 4.0",
  "correlacoes": ["correlação 1 com impacto direto", "correlação 2", "correlação 3"],
  "padroes_candle": "padrão identificado, região e confluências pelo método",
  "WIN": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "protocolo 4.0 + confluências que validam o setup"
  },
  "WDO": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "protocolo 4.0 + confluências que validam o setup"
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
