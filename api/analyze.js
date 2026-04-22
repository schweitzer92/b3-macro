export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Você é um analista institucional especializado em day trade na B3, operando com o PROTOCOLO INSTITUCIONAL completo (4.0 + 5.0 + 6.0) combinado com o método da Bíblia do Candlestick.

## PROTOCOLO 4.0 — LÓGICA OPERACIONAL
Fluxo obrigatório: Macro → Correlação → Fluxo → Região → Execução → Gestão

### SCORE MACRO GLOBAL
Calcule um score com base nos dados recebidos:
- VIX > 22 = -1 (risco elevado)
- SP500 subindo = +1 para WIN; caindo = -1
- Ouro subindo = -1 WIN (risk-off), +1 WDO
- Brent subindo = -1 WIN (inflação/DI), +1 WDO
- DI1 subindo = -1 WIN

Score total: >= +3 ambiente comprador | <= -3 ambiente vendedor | neutro = reduzir exposição

### CORRELAÇÃO BRASIL
- IFNC fraco = bancos pressionados = bearish WIN
- IMAT fraco = commodities sem suporte = bearish WIN
- DI1 subindo = pressão na bolsa = bearish WIN
- IFNC + IMAT + DI alinhados = sinal forte

### REGIÕES OPERACIONAIS
- Região A+: extremo do range = OPERAR
- Região A: nível relevante = OPERAR COM CAUTELA
- Região B: meio do range = PROIBIDO OPERAR

### TRAVAS OPERACIONAIS
Proibido operar: meio do range, macro contra a direção, fluxo não validado, após movimentos explosivos, VIX > 22, eventos de alto impacto.

### GESTÃO DE RISCO 4.0
Stop técnico obrigatório. Parcial obrigatória no primeiro alvo. Após parcial: break-even.

---

## PROTOCOLO 5.0 — TIMING, LIQUIDEZ, INTENÇÃO

TIMING: 09:00–10:30 Abertura (melhor) | 10:30–14:30 Meio (só A+) | 14:30–17:00 Tarde (segunda melhor)

LIQUIDEZ: Mapear máxima/mínima dia anterior, abertura, VWAP, POC, topos/fundos recentes.
Regra: preço entre liquidez = NÃO operar. Indo buscar liquidez = operar a favor.

INTENÇÃO: Saudável = continuidade + volume. Armadilha = movimento rápido + rejeição.

CLASSIFICADOR: Direcional (alta conf) | Lateral (média conf) | Evento (baixa conf) | Risco (muito baixa)

ALERTAS: BLOQUEIO = não operar | QUALIDADE = operar | PERIGO = cautela máxima

Máximo 2–3 trades/dia. Qualidade > Quantidade.

---

## PROTOCOLO 6.0 — COMPORTAMENTO E PERFORMANCE

Estado mental: Neutro = operar | Leve = reduzir lote | Alterado = PARAR.
Travas: 2 losses = reduzir | 3 losses = parar o dia | +2R = parar ou reduzir.
Trade bom = seguiu regras. Trade ruim = quebrou regras (mesmo com lucro).
Proteção: atingiu +2R → parar. Nunca devolver lucro.

---

## PROTOCOLO ENTRADA E SAÍDA

TIPOS: 1-Rejeição Suporte | 2-Rejeição Resistência | 3-Rompimento(pullback) | 4-Continuação | 5-Exaustão
NÃO ENTRAR: meio do range, sem volume, macro contra, após explosivo, R/R < 1:2

CHECKLIST 6/6: Macro✓ Correlação✓ Volume✓ Região A+✓ Padrão✓ Assimetria✓

---

## BÍBLIA DO CANDLESTICK

REVERSÃO: Engolfo, Pin Bar/Martelo, Estrela Cadente, Doji (Dragonfly/Gravestone), Estrela Manhã/Noite, Harami, Pinças, Falso Rompimento.
ESTRUTURA: Alta=HH+HL | Baixa=LH+LL | Lateral=range | Instável=evitar.
FIBONACCI: Retrações 38.2%, 50%, 61.8%. Alvos 100%, 161.8%.

---

## INSTRUÇÕES — SEGUIR NESTA ORDEM
1. Classificar o dia (Direcional/Lateral/Evento/Risco)
2. Timing (Abertura/Meio/Tarde)
3. Score macro
4. Correlação Brasil (IFNC, IMAT, DI)
5. Liquidez mapeada
6. Intenção (saudável/armadilha)
7. Região (A+/A/B)
8. Tipo de entrada (1-5)
9. Checklist 6/6
10. Gestão (stop, parcial, break-even)

CONFIANÇA: 6/6+score±3+A++direcional+abertura/tarde = 85-95% | 5/6+2conf+A+ = 70-84% | meio/4/6/A = 50-69% | trava/evento/neutro = NEUTRO

REGRAS: "Macro define direção. Técnico define entrada. Gestão define sobrevivência."

RESPONDA APENAS JSON PURO (sem markdown):
{
  "tipo_dia": "Direcional ou Lateral ou Evento ou Risco",
  "bloco_horario": "Abertura ou Meio ou Tarde",
  "score_macro": 0,
  "travas_ativas": [],
  "alerta_operacional": "Bloqueio ou Qualidade ou Perigo",
  "regiao_operacional": "A+ ou A ou B",
  "tipo_entrada": "Rejeição Suporte ou Rejeição Resistência ou Rompimento ou Continuação ou Exaustão ou N/A",
  "qualidade_setup": "A+ ou A ou B ou Inválido",
  "checklist_resultado": "6/6 ou X/6",
  "bias_macro": "análise macro 2-3 frases",
  "correlacoes": ["correlação 1", "correlação 2", "correlação 3"],
  "padroes_candle": "padrão + intenção + liquidez",
  "WIN": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "protocolo + confluências"
  },
  "WDO": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "protocolo + confluências"
  }
}`;

// ============================================================
// TWELVE DATA — delay ~1min, 800 req/dia grátis
// Cadastro gratuito em: twelvedata.com
// ============================================================
const TWELVE_API_KEY = process.env.TWELVE_DATA_API_KEY || '';

async function fetchTwelveData(symbol, outputsize = 2) {
  if (!TWELVE_API_KEY) throw new Error('TWELVE_DATA_API_KEY não configurada');
  const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=1min&outputsize=${outputsize}&apikey=${TWELVE_API_KEY}`;
  const controller1 = new AbortController();
  const timer1 = setTimeout(() => controller1.abort(), 8000);
  const res = await fetch(url, { signal: controller1.signal }).finally(() => clearTimeout(timer1));
  if (!res.ok) throw new Error('TwelveData HTTP ' + res.status);
  const data = await res.json();
  if (data.status === 'error') throw new Error('TwelveData: ' + data.message);
  const values = data.values;
  if (!values || values.length < 2) throw new Error('Sem dados suficientes');
  // TwelveData retorna do mais recente (index 0) para o mais antigo (index 1+)
  const atual    = parseFloat(values[0].close);
  const anterior = parseFloat(values[1].close);
  if (isNaN(atual) || isNaN(anterior)) throw new Error('TwelveData: valores inválidos');
  const variacao = anterior !== 0 ? ((atual - anterior) / anterior) * 100 : 0;
  return { preco: atual, variacao, fonte: 'TwelveData (~1min)' };
}

// ============================================================
// YAHOO FINANCE — fallback quando TwelveData não disponível
// ============================================================
async function fetchYahoo(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=2d`;
  const controller2 = new AbortController();
  const timer2 = setTimeout(() => controller2.abort(), 8000);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: controller2.signal
  }).finally(() => clearTimeout(timer2));
  if (!res.ok) throw new Error('Yahoo HTTP ' + res.status);
  const data = await res.json();
  const result = data.chart?.result?.[0];
  if (!result) throw new Error('Sem dados Yahoo: ' + symbol);
  const meta = result.meta;
  const preco = meta.regularMarketPrice || meta.previousClose;
  const prev  = meta.previousClose || meta.chartPreviousClose;
  const variacao = prev ? ((preco - prev) / prev) * 100 : 0;
  return { preco, variacao, fonte: 'Yahoo (~15min)' };
}

// ============================================================
// SELIC — Banco Central Brasil (DI1 proxy)
// ============================================================
async function fetchSELIC() {
  const urls = [
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/2?formato=json',
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/2?formato=json',
  ];
  for (const url of urls) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 8000);
      const res  = await fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(t));
      const text = await res.text();
      if (text.trim().startsWith('<')) continue;
      const d    = JSON.parse(text);
      if (!Array.isArray(d) || d.length < 2) continue;
      const atual    = parseFloat(d[d.length - 1].valor);
      const anterior = parseFloat(d[d.length - 2].valor);
      if (isNaN(atual) || isNaN(anterior)) continue;
      const variacao = anterior !== 0 ? ((atual - anterior) / anterior) * 100 : 0;
      return { preco: atual, variacao, fonte: 'Banco Central' };
    } catch (_) { continue; }
  }
  return { preco: 13.75, variacao: 0, fonte: 'SELIC ref.' };
}

// ============================================================
// MAPEAMENTO DOS ATIVOS
// TwelveData symbols: IFNC.SA, IMAT11.SA, SPX, UKOIL, XAU/USD
// Yahoo fallback:     IFNC.SA, IMAT.SA,  ^GSPC, BZ=F, GLD
// ============================================================
const ATIVOS = [
  { id: 'IFNC',  nome: 'IFNC',    twelve: 'IFNC:BOVESPA',  yahoo: 'IFNC.SA', uni: 'pts' },
  { id: 'IMAT',  nome: 'IMAT',    twelve: 'IMAT11:BOVESPA',  yahoo: 'IMAT.SA', uni: 'pts' },
  { id: 'SP500', nome: 'S&P 500', twelve: 'SPX',           yahoo: '^GSPC',   uni: 'pts' },
  { id: 'BRENT', nome: 'Brent',   twelve: 'UKOIL',         yahoo: 'BZ=F',    uni: 'usd' },
  { id: 'OURO',  nome: 'Ouro',    twelve: 'XAU/USD',       yahoo: 'GLD',     uni: 'usd' },
];

async function fetchAtivo(ativo) {
  // Tenta TwelveData primeiro (menor delay)
  if (TWELVE_API_KEY) {
    try {
      const d = await fetchTwelveData(ativo.twelve);
      return { ...ativo, ...d };
    } catch (_) { /* fallback */ }
  }
  // Fallback: Yahoo Finance
  const d = await fetchYahoo(ativo.yahoo);
  return { ...ativo, ...d };
}

async function coletarDados() {
  const resultado = {};
  const erros     = [];

  // Coleta ativos em paralelo
  const results = await Promise.allSettled(ATIVOS.map(a => fetchAtivo(a)));
  results.forEach(r => {
    if (r.status === 'fulfilled') {
      resultado[r.value.id] = r.value;
    } else {
      erros.push(r.reason?.message || 'erro');
    }
  });

  // DI1 sempre via Banco Central
  try {
    const selic = await fetchSELIC();
    resultado['DI1'] = { id: 'DI1', nome: 'DI1/SELIC', uni: '%', ...selic };
  } catch (e) {
    erros.push('DI1: ' + e.message);
  }

  return { dados: resultado, erros };
}

// ============================================================
// MONTAR CONTEXTO PARA IA
// ============================================================
function montarContexto(dados, dadosProfit, candles) {
  const brt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const linhas = [`DADOS DE MERCADO — ${brt} (BRT)`, ''];

  // Dados Profit têm prioridade (tempo real via Python local)
  const temProfit = dadosProfit && Object.keys(dadosProfit).length > 0;
  if (temProfit) {
    linhas.push('=== TEMPO REAL (Profit/TradingView) ===');
    Object.values(dadosProfit).forEach(d => {
      if (!d?.preco) return;
      const var1 = parseFloat(d.variacao) || 0;
      const pre1 = parseFloat(d.preco) || 0;
      const v   = var1 >= 0 ? `+${var1.toFixed(2)}` : var1.toFixed(2);
      const val = d.uni === '%' ? `${pre1.toFixed(2)}%` : d.uni === 'usd' ? `U$ ${pre1.toFixed(2)}` : Math.round(pre1).toLocaleString('pt-BR');
      linhas.push(`${d.nome || d.id}: ${val} (${v}%) via ${d.fonte || '?'}`);
    });
    linhas.push('');
  }

  // Dados backend (TwelveData ~1min ou Yahoo ~15min)
  const label = TWELVE_API_KEY ? 'BACKEND (~1min delay)' : 'BACKEND (~15min delay)';
  linhas.push(`=== ${label} ===`);
  Object.values(dados).forEach(d => {
    if (!d?.preco) return;
    const var2 = parseFloat(d.variacao) || 0;
    const pre2 = parseFloat(d.preco) || 0;
    const v   = var2 >= 0 ? `+${var2.toFixed(2)}` : var2.toFixed(2);
    const val = d.uni === '%' ? `${pre2.toFixed(2)}%` : d.uni === 'usd' ? `U$ ${pre2.toFixed(2)}` : Math.round(pre2).toLocaleString('pt-BR');
    linhas.push(`${d.nome || d.id}: ${val} (${v}%) via ${d.fonte || '?'}`);
  });
  linhas.push('');

  // Candles do Profit (se disponíveis)
  if (candles && Object.keys(candles).length > 0) {
    linhas.push('=== CANDLES 1MIN (Profit) ===');
    Object.entries(candles).forEach(([nome, cs]) => {
      linhas.push(`${nome}: ${cs.map(c => `[${c.time} O:${c.open} H:${c.high} L:${c.low} C:${c.close} V:${c.volume}]`).join(' ')}`);
    });
    linhas.push('');
  }

  linhas.push('Analise seguindo os protocolos e forneça os melhores pontos de entrada para WIN e WDO.');
  return linhas.join('\n');
}

// ============================================================
// HANDLER PRINCIPAL
// ============================================================
export default async function handler(req) {
  const cors = {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type':                 'application/json',
  };

  if (req.method === 'OPTIONS') return new Response(null, { headers: cors });

  try {
    const body   = await req.json().catch(() => ({}));
    const action = body.action || 'analyze';

    // ── COLETAR ──────────────────────────────────────────────
    if (action === 'coletar') {
      const { dados, erros } = await coletarDados();
      return new Response(JSON.stringify({ dados, erros }), { headers: cors });
    }

    // ── ANALYZE ──────────────────────────────────────────────
    if (action === 'analyze') {
      const { dados, erros } = await coletarDados();
      const dadosProfit = body.dados_profit || {};
      const candles     = body.candles     || {};

      const contexto = montarContexto(dados, dadosProfit, candles);

      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method:  'POST',
        headers: {
          'Content-Type':    'application/json',
          'x-api-key':       process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model:      'claude-sonnet-4-5',
          max_tokens: 1000,
          system:     SYSTEM_PROMPT,
          messages:   [{ role: 'user', content: contexto }],
        }),
      });

      if (!claudeRes.ok) {
        const err = await claudeRes.json().catch(() => ({}));
        return new Response(JSON.stringify({ dados, erros, claude: { error: err } }), { status: 200, headers: cors });
      }

      const claudeData = await claudeRes.json();
      return new Response(JSON.stringify({ dados, erros, dadosProfit, claude: claudeData }), { headers: cors });
    }

    return new Response(JSON.stringify({ error: 'action inválida' }), { status: 400, headers: cors });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: cors });
  }
}
