"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    pergunta: "Quem pode se aposentar pelo PRESERV?",
    resposta:
      "Podem se aposentar pelo PRESERV os servidores públicos municipais titulares de cargo efetivo dos Poderes Executivo e Legislativo, suas autarquias e fundações públicas vinculados ao Regime Próprio de Previdência Social (RPPS) de Sarandi. Servidores exclusivamente em comissão, temporários ou empregos públicos não fazem parte deste regime.",
  },
  {
    pergunta: "Quais documentos são necessários para solicitar aposentadoria?",
    resposta:
      "Os principais documentos são: RG, CPF, comprovante de residência, certidão de nascimento ou casamento, contracheques recentes, certidão de tempo de contribuição de outros regimes (se houver) e o formulário de requerimento preenchido. A lista detalhada pode ser obtida diretamente no nosso setor de atendimento.",
  },
  {
    pergunta: "Como funciona o recadastramento de aposentados e pensionistas?",
    resposta:
      "O recadastramento (prova de vida) é obrigatório e deve ser realizado anualmente conforme o calendário oficial. O beneficiário deve apresentar documento de identificação com foto e comprovante de residência. Segurados aposentados por invalidez ou dependentes inválidos também devem submeter-se a exame médico-pericial anual. O não comparecimento resulta na suspensão do benefício.",
  },
  {
    pergunta: "Como solicitar a pensão por morte e qual o prazo?",
    resposta:
      "A pensão por morte deve ser requerida pelos dependentes legais do segurado falecido (como cônjuge, companheiro e filhos menores de 18 anos ou inválidos). Para que o benefício seja pago retroativamente a contar da data do óbito, o requerimento deve ser feito em até 30 dias após o falecimento. Após esse prazo, o benefício será devido a partir da data de entrada do requerimento.",
  },
  {
    pergunta:
      "Posso averbar tempo de serviço de outros órgãos ou da iniciativa privada?",
    resposta:
      "Sim. É assegurada a contagem integral do tempo de contribuição prestado no serviço público federal, estadual, distrital e municipal, bem como o tempo de iniciativa privada vinculado ao Regime Geral (RGPS/INSS). Para isso, é necessário apresentar a Certidão de Tempo de Contribuição (CTC) oficial emitida pelo órgão de origem. É expressamente vedada a contagem de tempo de contribuição fictício.",
  },
  {
    pergunta: "Qual é o horário de atendimento do PRESERV?",
    resposta:
      "O PRESERV atende de segunda a sexta-feira, das 07:30 às 11:30 e das 13:00 às 17:00. Estamos localizados na Av. Londrina, 72 - Centro, Sarandi - PR. Para informações adicionais, você pode entrar em contato pelo telefone (44) 3032-6400.",
  },
  {
    pergunta: "Como faço para simular minha aposentadoria?",
    resposta:
      "Você pode solicitar uma simulação comparecendo ao PRESERV com seus documentos pessoais e seu histórico funcional completo. Nossa equipe técnica analisará suas regras de transição e enquadramento atuarial para fornecer uma estimativa de datas, requisitos faltantes e valores.",
  },
  {
    pergunta: "O que é o Portal da Transparência e o que posso encontrar lá?",
    resposta:
      "O Portal da Transparência é o canal oficial de prestação de contas do PRESERV. Em cumprimento à Lei de Acesso à Informação, disponibilizamos dados atualizados sobre receitas, despesas, demonstrativos contábeis (balanços orçamentários e patrimoniais), relatórios de investimentos, folhas de pagamento, licitações e contratos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos
            serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {perguntas.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="flex items-center gap-3 font-medium text-foreground">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {item.pergunta}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-8">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Não encontrou o que procurava?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Entre em contato conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
