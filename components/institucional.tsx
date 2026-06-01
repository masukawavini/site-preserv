import { Building2, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Institucional() {
  return (
    <section id="institucional" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Informações Institucionais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça a estrutura, competências e gestão do PRESERV
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Competências e Atribuições */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Competências e Atribuições
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                O PRESERV - Caixa de Aposentadoria e Pensão dos Servidores
                Municipais de Sarandi é uma autarquia municipal responsável pela
                gestão do Regime Próprio de Previdência Social (RPPS) do
                município.
              </p>
              <p>Competências Gerais:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Gerenciamento do RPPS: Centraliza a administração do regime
                  previdenciário municipal.
                </li>
                <li>
                  Gestão de Recursos: É responsável pela arrecadação,
                  investimentos e gestão dos recursos e ativos previdenciários,
                  garantindo o plano de custeio.
                </li>
                <li>
                  Concessão de Benefícios: Delibera, concede, paga e mantém os
                  benefícios previdenciários devidos aos segurados (como
                  aposentadorias por invalidez, compulsória, idade e tempo de
                  contribuição) e aos seus dependentes (pensão por morte).
                </li>
              </ul>
              <p>Atribuições da Diretoria Executiva:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Superintendente: Atua como o representante legal da
                  instituição. Cabe a ele coordenar a Diretoria Executiva,
                  elaborar o orçamento anual e plurianual, autorizar despesas,
                  movimentações financeiras e aplicações do fundo. Também
                  supervisiona e expede os atos de concessão de benefícios, além
                  de celebrar contratos e convênios em nome do PRESERV.
                </li>
                <li>
                  Diretor de Administração: Responsável direto pelas ações de
                  gestão administrativa e pela gerência, preservação e
                  integridade dos bens pertencentes ao Fundo de Previdência.
                </li>
              </ul>
              <p>
                O PRESERV atua de forma autônoma em sua escrituração contábil e
                financeira, mas suas contas e diretrizes são fiscalizadas e
                normatizadas pelo Conselho de Previdência (CP) e,
                posteriormente, homologadas pelo Tribunal de Contas.
              </p>
            </CardContent>
          </Card>

          {/* Estrutura Organizacional */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                Estrutura Organizacional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* NÍVEL 1: Superintendência */}
                <div className="bg-secondary rounded-lg p-4 text-center max-w-md mx-auto">
                  <p className="font-semibold text-foreground">
                    Superintendência
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cargo máximo de deliberação
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border"></div>
                </div>

                {/* NÍVEL 2: Conselho de Previdência e Comitê de Investimentos */}
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-secondary rounded-lg p-4 text-center flex flex-col justify-center">
                    <p className="font-semibold text-foreground">
                      Conselho de Previdência
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4 text-center flex flex-col justify-center">
                    <p className="font-semibold text-foreground">
                      Comitê de Investimentos
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border"></div>
                </div>

                {/* NÍVEL 3: Diretoria Administrativa */}
                <div className="bg-secondary rounded-lg p-4 text-center max-w-md mx-auto">
                  <p className="font-semibold text-foreground">
                    Diretoria Administrativa
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border"></div>
                </div>

                {/* NÍVEL 4: Setores Operacionais (Lado a lado em grid adaptável) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Jurídico
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Informática
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Recursos Humanos
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Concessão de Benefícios
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center col-span-2 sm:col-span-1">
                    <p className="font-medium text-sm text-foreground">
                      Departamento de Licitações
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Contabilidade
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Financeiro
                    </p>
                  </div>
                  <div className="bg-secondary/80 rounded-lg p-3 text-center flex items-center justify-center">
                    <p className="font-medium text-sm text-foreground">
                      Almoxarifado
                    </p>
                  </div>
                </div>

                {/* Rodapé informativo */}
                <p className="text-xs text-muted-foreground text-center mt-6">
                  Última atualização: junho/2026
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gestores Responsáveis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Gestores Responsáveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    Superintendente
                  </p>
                  <p className="text-muted-foreground">
                    Gilson Rufino de Souza
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold text-foreground">
                    Presidente do Conselho de Previdência
                  </p>
                  <p className="text-muted-foreground">
                    Robeto Vagner Sant'Ana Júnior
                  </p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold text-foreground">
                    Diretor Administrativo
                  </p>
                  <p className="text-muted-foreground">Renan Cavallini</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Missão e Valores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Missão e Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">Missão</p>
                <p className="text-muted-foreground">
                  Garantir aos servidores públicos municipais de Sarandi e seus
                  dependentes a proteção previdenciária com gestão eficiente,
                  transparente e sustentável.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Valores</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Transparência na gestão pública</li>
                  <li>• Eficiência administrativa</li>
                  <li>• Respeito ao servidor</li>
                  <li>• Responsabilidade fiscal</li>
                  <li>• Compromisso com o futuro</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
