"use client"; // Necessário para usar hooks do cliente e interações em builds estáticas

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";

// Dados estruturados e completos mapeados a partir de todas as seções do site do PRESERV
const DADOS_DO_SITE = [
  // === SEÇÃO: HERO / ACESSO RÁPIDO ===
  {
    id: "hero-transparencia",
    titulo: "Portal da Transparência",
    tipo: "Transparência",
    link: "https://sarandi.eloweb.net/portaltransparencia/2/",
    tags: "receitas, despesas, contas, finanças, gastos, orçamento, eloweb, elo web",
    descricao:
      "Canal oficial de prestação de contas, receitas, despesas e relatórios de investimentos do PRESERV.",
  },
  {
    id: "hero-radar",
    titulo: "Radar da Transparência",
    tipo: "Transparência",
    link: "https://radardatransparencia.atricon.org.br/",
    tags: "atricon, índice, fiscalização, tribunal de contas, nota, avaliação",
    descricao:
      "Consulta externa ao Radar da Transparência Pública Nacional da Atricon.",
  },
  {
    id: "hero-holerite",
    titulo: "Holerite Eletrônico (Portal RH)",
    tipo: "Serviços",
    link: "https://sarandi.eloweb.net/WebEloPortalRH",
    tags: "contra-cheque, contracheque, pagamento, demonstrativo, salário, rendimentos",
    descricao:
      "Acesso ao sistema WebElo para emissão de contracheques e demonstrativos de rendimentos.",
  },

  // === SEÇÃO: SERVIÇOS ===
  {
    id: "srv-aposentadoria",
    titulo: "Aposentadoria (Solicitação)",
    tipo: "Serviços",
    link: "#servicos",
    tags: "aposentado, tempo de contribuição, idade, invalidez, compulsória, requerer, dar entrada",
    descricao:
      "Processos de transição e concessão de aposentadorias para servidores efetivos.",
  },
  {
    id: "srv-pensao",
    titulo: "Pensão por Morte",
    tipo: "Serviços",
    link: "#servicos",
    tags: "falecimento, óbito, viúva, viúvo, dependentes, morte, cônjuge, filhos",
    descricao:
      "Concessão do benefício previdenciário aos dependentes legais do segurado falecido.",
  },
  {
    id: "srv-simulacao",
    titulo: "Simulação de Aposentadoria",
    tipo: "Serviços",
    link: "#servicos",
    tags: "simular, calcular, quanto tempo falta, estimativa, regras de transição, cálculo",
    descricao:
      "Análise técnica do histórico funcional para estimativa de datas e valores de aposentadoria.",
  },
  {
    id: "srv-certidoes",
    titulo: "Certidões e Declarações",
    tipo: "Serviços",
    link: "#servicos",
    tags: "ctc, certidão de tempo de contribuição, comprovação previdenciária, papel, documento",
    descricao:
      "Emissão de documentos oficiais para fins de comprovação de direitos previdenciários.",
  },
  {
    id: "srv-averbacao",
    titulo: "Averbação de Tempo de Serviço",
    tipo: "Serviços",
    link: "#servicos",
    tags: "averbar, trazer tempo, inss, empresa privada, outro órgão, somar tempo",
    descricao:
      "Inclusão de tempo de contribuição de iniciativa privada (RGPS) ou de outros regimes públicos.",
  },
  {
    id: "srv-recadastramento",
    titulo: "Recadastramento Anual (Prova de Vida)",
    tipo: "Serviços",
    link: "#servicos",
    tags: "prova de vida, recadastrar, atualizar cadastro, censo, calendário oficial, suspensão",
    descricao:
      "Atualização cadastral e prova de vida obrigatória realizada anualmente para inativos e pensionistas.",
  },

  // === SEÇÃO: INSTITUCIONAL ===
  {
    id: "inst-competencias",
    titulo: "Competências, Atribuições e Fundo Previdenciário",
    tipo: "Institucional",
    link: "#institucional",
    tags: "autarquia, rpps, regime próprio, arrecadação, aplicações, superintendente, diretoria executiva",
    descricao:
      "Entenda o papel do PRESERV no gerenciamento do Regime Próprio de Previdência de Sarandi.",
  },
  {
    id: "inst-organograma",
    titulo: "Estrutura Organizacional e Organograma",
    tipo: "Institucional",
    link: "#institucional",
    tags: "organograma, setores, informática, rh, jurídico, licitações, contabilidade, financeiro, conselho",
    descricao:
      "Organização administrativa: da Superintendência aos setores operacionais.",
  },
  {
    id: "inst-gestores",
    titulo: "Gestores Responsáveis e Diretoria",
    tipo: "Institucional",
    link: "#institucional",
    tags: "gilson rufino de souza, renan cavallini, roberto vagner, quem manda, superintendente, diretores",
    descricao:
      "Lista dos responsáveis legais e presidentes dos conselhos da autarquia.",
  },
  {
    id: "inst-missao",
    titulo: "Missão, Visão e Valores",
    tipo: "Institucional",
    link: "#institucional",
    tags: "objetivos, princípios, ética, responsabilidade fiscal, sustentabilidade, futuro",
    descricao:
      "Os pilares institucionais que guiam a gestão previdenciária de Sarandi.",
  },

  // === SEÇÃO: LEGISLAÇÃO ===
  {
    id: "leg-lei-organica",
    titulo: "Lei Orgânica do Município de Sarandi",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "lei organica, constituição municipal, s/n, regras municipais",
    descricao: "Lei Orgânica que rege o Município de Sarandi.",
  },
  {
    id: "leg-lc-10-92",
    titulo: "Lei Complementar Nº 10/92 (Estatuto dos Servidores)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "estatuto, servidores municipais, direitos, deveres, licença, lc 10",
    descricao:
      "Dispõe sobre o Estatuto dos Servidores do Município de Sarandi.",
  },
  {
    id: "leg-lc-264-11",
    titulo: "Lei Complementar Nº 264/11 (Reestruturação do RPPS)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "reestrutura rpps, regime próprio, previdência social, lc 264",
    descricao:
      "Reestrutura o Regime Próprio de Previdência Social do Município de Sarandi.",
  },
  {
    id: "leg-lc-392-21",
    titulo: "Lei Complementar Nº 392/21 (Previdência Complementar)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "previdência complementar, rpc, teto constitucional, limite máximo, art 40, cf, lc 392",
    descricao:
      "Institui o Regime de Previdência Complementar e fixa o limite máximo para concessão de aposentadorias e pensões.",
  },
  {
    id: "leg-lc-101-00",
    titulo: "Lei Complementar Nº 101/00 (Lei de Responsabilidade Fiscal)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "lrf, finanças públicas, responsabilidade fiscal, gestão fiscal, gastos públicos, lc 101",
    descricao:
      "Estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal.",
  },
  {
    id: "leg-lc-7-92",
    titulo: "Lei Complementar Nº 7/92 (Regime Jurídico Único)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "regime jurídico único, rju, contratação, estabilidade, lc 7",
    descricao:
      "Dispõe sobre a instituição do Regime Jurídico Único dos Servidores Municipais.",
  },
  {
    id: "leg-lc-229-09",
    titulo: "Lei Complementar Nº 229/09 (Quadro de Pessoal do PRESERV)",
    tipo: "Legislação",
    link: "#legislacao",
    tags: "quadro de pessoal, vagas preserv, cargos preserv, estrutura de funcionários, lc 229",
    descricao:
      "Cria o quadro de pessoal da Caixa de Aposentadoria e Pensão dos Servidores Municipais de Sarandi - PRESERV.",
  },

  // === SEÇÃO: DÚVIDAS FREQUENTES (FAQ) ===
  {
    id: "faq-quem-pode",
    titulo: "FAQ: Quem tem direito ao Regime Próprio (RPPS)?",
    tipo: "FAQ",
    link: "#faq",
    tags: "quem pode se aposentar, cargo efetivo, concursado, comissão, temporário, pss",
    descricao:
      "Esclarecimentos sobre quem se enquadra como segurado da previdência municipal de Sarandi.",
  },
  {
    id: "faq-documentos",
    titulo: "FAQ: Documentos para dar entrada na aposentadoria",
    tipo: "FAQ",
    link: "#faq",
    tags: "rg, cpf, comprovante de residência, certidão de casamento, documentos, papelada",
    descricao:
      "Lista inicial de documentos necessários para abertura do processo de aposentadoria.",
  },
  {
    id: "faq-prazos-pensao",
    titulo: "FAQ: Prazo para requerer Pensão por Morte",
    tipo: "FAQ",
    link: "#faq",
    tags: "30 dias, retroativo, data do óbito, entrada no requerimento, atrasado",
    descricao:
      "Informações sobre o limite de 30 dias para garantir o pagamento desde a data do falecimento.",
  },
  {
    id: "faq-ficticio",
    titulo: "FAQ: Vedação de tempo de contribuição fictício",
    tipo: "FAQ",
    link: "#faq",
    tags: "tempo fictício, contagem proibida, ctc ilegal, tempo falso",
    descricao:
      "Esclarecimento legal proibindo terminantemente a averbação de tempo de serviço que não tenha existido de fato.",
  },
];

// Configurações do Fuse.js
const fuseOptions = {
  keys: [
    { name: "titulo", weight: 0.7 },
    { name: "tags", weight: 0.5 },
    { name: "tipo", weight: 0.2 },
  ],
  threshold: 0.4,
};

// Componente Filho isolado que executa a pesquisa no navegador do cliente
function ResultadosBusca() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Inicializa o Fuse com os dados e as configurações
  const fuse = new Fuse(DADOS_DO_SITE, fuseOptions);

  // Executa a busca inteligente
  const resultadosFuse = fuse.search(query);

  // Mapeamos para extrair apenas o "item" puro
  const resultadosFiltrados = resultadosFuse.map((result) => result.item);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Resultados para: <span className="text-primary">"{query}"</span>
      </h1>

      {resultadosFiltrados.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground mb-2">
            Nenhum resultado encontrado.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Verifique a grafia ou tente termos mais abrangentes (ex: se buscou
            por "contra-cheque", tente "holerite").
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {resultadosFiltrados.map((item) => {
            // Verifica se o link é externo ou apenas uma âncora interna do site
            const urlFinal = item.link.startsWith("http")
              ? item.link
              : `/${item.link}`;

            return (
              <div
                key={item.id}
                className="p-4 border rounded-lg bg-card shadow-sm transition-all hover:border-primary/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {item.tipo}
                </span>
                <h2 className="text-xl font-medium mt-2 mb-1 text-foreground">
                  {item.titulo}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.descricao}
                </p>
                <a
                  href={urlFinal}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Ver mais detalhes →
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Componente Pai exportado por padrão para a página do Next.js
export default function PaginaBusca() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto p-8 text-center text-muted-foreground">
          Buscando informações...
        </div>
      }
    >
      <ResultadosBusca />
    </Suspense>
  );
}
