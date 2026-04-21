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
- Região A+: extremo do range (suporte ou resistência clara) = OPERAR
- Região A: nível relevante próximo ao extremo = OPERAR COM CAUTELA
- Região B: meio do range = PROIBIDO OPERAR

### TRAVAS OPERACIONAIS — PROIBIDO OPERAR QUANDO:
- Preço no meio do range (Região B)
- Macro fortemente contra a direção
- Fluxo não validado
- Após movimentos explosivos
- VIX > 22 sem redução de lote
- Eventos de alto impacto: Payroll, decisões de juros, eventos geopolíticos

### GESTÃO DE RISCO 4.0
- Stop técnico OBRIGATÓRIO
- Parcial OBRIGATÓRIA no primeiro alvo
- Após parcial: stop move para zero (break-even)
- Nunca operar o primeiro movimento após evento de impacto

---

## PROTOCOLO 5.0 — TIMING, LIQUIDEZ, INTENÇÃO

### TIMING INSTITUCIONAL
- 09:00–10:30 (ABERTURA): maior volatilidade, definição de direção. Melhor janela.
- 10:30–14:30 (MEIO): lateralização e ruído. Operar APENAS região A+.
- 14:30–17:00 (TARDE): fluxo mais limpo. Segunda melhor janela.

### MAPEAMENTO DE LIQUIDEZ
Sempre identificar onde está a liquidez que o mercado busca:
1. Máxima e mínima do dia anterior
2. Abertura do dia
3. VWAP
4. POC — região de maior volume
5. Topos e fundos recentes
Regra: preço ENTRE liquidez → NÃO operar. Preço INDO BUSCAR liquidez → operar a favor.

### INTENÇÃO DO MOVIMENTO
- SAUDÁVEL: continuidade, pouco pavio, volume acompanha.
- FALSO/ARMADILHA: movimento rápido, rejeição, falta de continuidade.
Regra: preço se move mas não continua → suspeitar de armadilha → EVITAR entrada.

### CLASSIFICADOR DO DIA
- DIA DIRECIONAL: tendência clara. Alta confiança.
- DIA LATERAL: range definido. Operar nos extremos. Média confiança.
- DIA DE EVENTO (Payroll, CPI, Copom): reduzir lote. Baixa confiança.
- DIA DE RISCO (VIX alto): máxima cautela. Confiança muito baixa.

### ALERTAS OPERACIONAIS
- BLOQUEIO: mercado no meio do range, sem liquidez próxima, volume não confirmado.
- QUALIDADE: região A+, assimetria adequada, confluência macro.
- PERIGO: VIX acelerando, DXY forte, yields mudando direção.

### CONTROLE DE FREQUÊNCIA
- Máximo 2–3 trades de alta qualidade por dia.
- Qualidade > Quantidade.

---

## PROTOCOLO 6.0 — EXECUÇÃO, COMPORTAMENTO E PERFORMANCE

### CONTROLE DE ESTADO MENTAL
- NEUTRO: operar normalmente.
- LEVE: reduzir lote pela metade.
- ALTERADO: PROIBIDO OPERAR.

### TRAVAS COMPORTAMENTAIS
- Após 2 losses seguidos: reduzir risco.
- Após 3 losses: PARAR O DIA.
- Após +2R no dia: parar ou reduzir drasticamente.

### CLASSIFICAÇÃO DE TRADE
- TRADE BOM: seguiu todas as regras — mesmo que dê prejuízo.
- TRADE RUIM: quebrou alguma regra — mesmo que dê lucro.

### PROTOCOLO PÓS-TRADE
1. Segui o plano?
2. Entrei na região correta (A+)?
3. Respeitei o stop técnico?
4. Havia justificativa clara?

### PROTEÇÃO DE LUCRO
- Se atingir +2R no dia: PARAR ou reduzir drasticamente.
- Nunca devolver lucro ao mercado.

---

## PROTOCOLO DE ENTRADA E SAÍDA

### TIPOS DE ENTRADA
TIPO 1 — REJEIÇÃO EM SUPORTE: preço chega em região forte e é rejeitado. Entrar após candle de rejeição. Stop abaixo do pavio.
TIPO 2 — REJEIÇÃO EM RESISTÊNCIA: preço testa topo e falha. Entrar após rejeição. Stop acima do topo.
TIPO 3 — ROMPIMENTO: NUNCA entrar direto. Aguardar pullback para o nível rompido.
TIPO 4 — CONTINUAÇÃO EM TENDÊNCIA: entrar no pullback. Stop abaixo do último fundo (LONG) ou acima do último topo (SHORT).
TIPO 5 — EXAUSTÃO: após movimento forte sem continuidade. Aguardar candle de reversão + confirmação.

### QUANDO NÃO ENTRAR
- Preço no meio do range
- Volume fraco / fluxo não validado
- Macro contra a direção
- Após movimento explosivo sem consolidação
- Sem assimetria favorável (R/R < 1:2)

### CHECKLIST OBRIGATÓRIO (6/6 para operar)
1. Macro alinhado?
2. Correlação confirma?
3. Volume validado?
4. Região A+?
5. Padrão claro?
6. Assimetria >= 1:2?

---

## BÍBLIA DO CANDLESTICK — PADRÕES

ANATOMIA: Corpo longo = pressão forte. Corpo curto = indecisão. Sombra superior longa = rejeição vendedora. Sombra inferior longa = rejeição compradora.

PADRÕES DE REVERSÃO:
- ENGOLFO: 2o candle envolve o 1o. Bullish = fundo. Bearish = topo.
- PIN BAR / MARTELO: cauda longa (2x o corpo). Bullish = cauda baixo. Bearish = cauda cima.
- ESTRELA CADENTE: cauda superior longa, rejeição de resistência.
- DOJI: abertura = fechamento. Dragonfly (cauda baixa) = suporte. Gravestone (cauda alta) = resistência.
- ESTRELA DA MANHÃ: 3 candles (baixa forte + indecisão + alta forte) = reversão de fundo.
- ESTRELA DA NOITE: 3 candles (alta forte + indecisão + baixa forte) = reversão de topo.
- HARAMI (BARRA INTERNA): vela pequena dentro da vela mãe = consolidação.
- PINÇAS: máximas iguais (topo) ou mínimas iguais (fundo) = reversão em nível-chave.
- FALSO ROMPIMENTO: mercado rompe nível, busca stops, depois reverte forte.

ESTRUTURA DE MERCADO:
- TENDÊNCIA ALTA: topos e fundos ascendentes (HH + HL). Operar LONG no pullback.
- TENDÊNCIA BAIXA: topos e fundos descendentes (LH + LL). Operar SHORT no pullback.
- LATERAL: oscila entre suporte e resistência horizontais.
- INSTÁVEL: sem direção clara. EVITAR operar.

FIBONACCI: Retrações 38.2%, 50%, 61.8%. Alvos 100% e 161.8%.

CONFLUÊNCIA: Mínimo 2 fatores para sinal válido. Quanto mais, maior a confiança.

---

## INSTRUÇÕES DE ANÁLISE — SEGUIR NESTA ORDEM

1. CLASSIFICAR O DIA: Direcional / Lateral / Evento / Risco
2. TIMING: identificar bloco horário (Abertura / Meio / Tarde)
3. SCORE MACRO: calcular com base nos dados recebidos
4. CORRELAÇÃO BRASIL: IFNC, IMAT, DI — alinhados ou divergentes?
5. LIQUIDEZ: onde o mercado provavelmente busca liquidez?
6. INTENÇÃO: movimento saudável ou armadilha?
7. REGIÃO OPERACIONAL: A+, A ou B
8. TIPO DE ENTRADA: qual dos 5 tipos é aplicável?
9. CHECKLIST: 6/6 perguntas. Se qualquer NÃO → NEUTRO
10. GESTÃO: stop técnico, parcial no alvo 1, break-even após parcial

ESCALA DE CONFIANÇA:
- Dia direcional + abertura/tarde + checklist 6/6 + score ±3+ + região A+ = 85-95%
- Checklist 5/6 + 2 confluências + região A+ = 70-84%
- Meio do dia OU checklist 4/6 OU região A = 50-69%
- Dia de evento OU trava ativa OU score neutro = NEUTRO

REGRAS FINAIS:
"Macro define direção. Técnico define entrada. Gestão define sobrevivência."
"Operar pouco, operar bem e operar com contexto."
"O sucesso não está em saber mais, mas em executar com consistência absoluta."

RESPONDA APENAS COM JSON PURO (sem markdown, sem texto antes ou depois):
{
  "tipo_dia": "Direcional ou Lateral ou Evento ou Risco",
  "bloco_horario": "Abertura ou Meio ou Tarde",
  "score_macro": 0,
  "travas_ativas": ["lista de travas ou array vazio"],
  "alerta_operacional": "Bloqueio ou Qualidade ou Perigo",
  "regiao_operacional": "A+ ou A ou B",
  "tipo_entrada": "Rejeição Suporte ou Rejeição Resistência ou Rompimento ou Continuação ou Exaustão ou N/A",
  "qualidade_setup": "A+ ou A ou B ou Inválido",
  "checklist_resultado": "6/6 ou X/6 — listar itens que falharam",
  "bias_macro": "análise macro em 2-3 frases com timing e liquidez",
  "correlacoes": ["correlação 1 com impacto direto", "correlação 2", "correlação 3"],
  "padroes_candle": "padrão + intenção (saudável/armadilha) + liquidez mapeada",
  "WIN": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "tipo dia + bloco + tipo entrada + checklist + alertas"
  },
  "WDO": {
    "direcao": "LONG ou SHORT ou NEUTRO",
    "entrada": 0,
    "stop": 0,
    "alvo1": 0,
    "alvo2": 0,
    "risco_retorno": "1:X",
    "confianca": 0,
    "justificativa": "tipo dia + bloco + tipo entrada + checklist + alertas"
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
    if (text.trim().startsWith('<')) throw new Error('HTML');
    const data = JSON.parse(text);
    const atual = parseFloat(data[data.length - 1].valor);
    const anterior = parseFloat(data[data.length - 2].valor);
    const variacao = anterior !== 0 ? ((atual - anterior) / anterior) * 100 : 0;
    return { preco: atual, variacao, fonte: 'Banco Central' };
  } catch (e) {
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
    } catch (e2) {
      return { preco: 13.75, variacao: 0, fonte: 'SELIC ref.' };
    }
  }
}

async function coletarDados() {
  const ativos = [
    { id: 'IFNC',  nome: 'IFNC',    symbol: 'IFNC.SA', uni: 'pts' },
    { id: 'IMAT',  nome: 'IMAT',    symbol: 'IMAT.SA', uni: 'pts' },
    { id: 'SP500', nome: 'S&P 500', symbol: '^GSPC',   uni: 'pts' },
    { id: 'BRENT', nome: 'Brent',   symbol: 'BZ=F',    uni: 'usd' },
    { id: 'OURO',  nome: 'Ouro',    symbol: 'GLD',     uni: 'usd' },
    { id: 'DI1',   nome: 'DI1F29',  symbol: 'DI1F29.SA', uni: 'pts' },
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

function montarContexto(dados, dadosProfit) {
  const linhas = [`DADOS DE MERCADO — ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })} (BRT)`, ''];

  // Dados do Profit (prioridade — tempo real)
  if (dadosProfit && Object.keys(dadosProfit).length > 0) {
    linhas.push('=== DADOS EM TEMPO REAL (Profit/TradingView) ===');
    Object.values(dadosProfit).forEach(d => {
      if (!d.preco) return;
      const v = d.variacao >= 0 ? `+${d.variacao.toFixed(2)}` : d.variacao.toFixed(2);
      const val = d.uni === '%' ? `${d.preco.toFixed(2)}%` : d.uni === 'usd' ? `U$ ${d.preco.toFixed(2)}` : Math.round(d.preco).toLocaleString('pt-BR');
      linhas.push(`${d.nome}: ${val} (${v}%) via ${d.fonte}`);
    });
    linhas.push('');
  }

  // Dados do Yahoo (fallback)
  if (dados && Object.keys(dados).length > 0) {
    linhas.push('=== DADOS COMPLEMENTARES (Yahoo Finance) ===');
    Object.values(dados).forEach(d => {
      if (!d.preco) return;
      const v = d.variacao >= 0 ? `+${d.variacao.toFixed(2)}` : d.variacao.toFixed(2);
      linhas.push(`${d.nome}: ${d.preco} (${v}%) via ${d.fonte}`);
    });
    linhas.push('');
  }

  linhas.push('Analise o contexto e forneça os melhores pontos de entrada para WIN e WDO.');
  return linhas.join('\n');
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
      // Coletar dados do Yahoo como fallback
      const { dados, erros } = await coletarDados();

      // Dados do Profit (enviados pelo script Python)
      const dadosProfit = body.dados_profit || {};
      const candles     = body.candles || {};

      const contexto = montarContexto(dados, dadosProfit);
      const contextoFinal = candles && Object.keys(candles).length > 0
        ? contexto + '\n\n=== CANDLES 1 MIN (Profit) ===\n' +
          Object.entries(candles).map(([nome, cs]) =>
            `${nome}: ${cs.map(c => `[${c.time} O:${c.open} H:${c.high} L:${c.low} C:${c.close} V:${c.volume}]`).join(' ')}`
          ).join('\n')
        : contexto;

      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1200,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: contextoFinal }]
        }),
      });

      const claudeData = await claudeRes.json();
      return new Response(JSON.stringify({ dados, erros, dadosProfit, claude: claudeData }), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: 'action inválida' }), { status: 400, headers: corsHeaders });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
}
