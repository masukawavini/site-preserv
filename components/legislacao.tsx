import Link from "next/link";
import { FileText, Download, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const atosNormativos = [
  {
    tipo: "Lei Orgânica",
    numero: "S/N",
    descricao: "Lei Orgânica do Município de Sarandi",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852180",
  },
  {
    tipo: "Lei Complementar",
    numero: "10/92",
    descricao: "Dispõe sobre o Estatuto dos Servidores do Município de Sarandi",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852174",
  },
  {
    tipo: "Lei Complementar",
    numero: "264/11",
    descricao:
      "Reestrutura o Regime Próprio de Previdência Social do Município de Sarandi",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852176",
  },
  {
    tipo: "Lei Complementar",
    numero: "392/21",
    descricao:
      "Institui o Regime de Previdência Complementar no âmbito do Município de Sarandi; fixa o limite máximo para a concessão de aposentadorias e pensões pelo regime de previdência de que trata o art. 40 da Constituição Federal",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852223",
  },
  {
    tipo: "Lei Complementar",
    numero: "101/00",
    descricao:
      "Estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852163",
  },
  {
    tipo: "Lei Complementar",
    numero: "7/92",
    descricao:
      "Dispõe sobre a instituição do Regime Jurídico Único dos Servidores Municipais",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852158",
  },
  {
    tipo: "Lei Complementar",
    numero: "229/09",
    descricao:
      "Cria o quadro de pessoal da Caixa de Aposentadoria e Pensão dos Servidores Municipais de Sarandi - PRESERV",
    data: "15/05/2026",
    link: "https://sarandi.eloweb.net/portaltransparencia-api/api/files/arquivo/349852172",
  },
];

export function Legislacao() {
  return (
    <section id="legislacao" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atos Normativos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesse a legislação, portarias, resoluções e demais atos normativos
            do PRESERV
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Lista de Atos */}
          <div className="space-y-4">
            {atosNormativos.map((ato, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {ato.tipo}
                          </span>
                          <span className="font-semibold text-foreground">
                            {ato.numero}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {ato.descricao}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Publicado em: {ato.data}
                        </p>
                      </div>
                    </div>

                    {/* Botão transformado em Link com target _blank */}
                    <a
                      href={ato.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 shrink-0"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
