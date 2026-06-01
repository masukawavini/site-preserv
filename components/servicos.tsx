import {
  FileCheck,
  HeartPulse,
  Calculator,
  FileText,
  Clock,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicos = [
  {
    icon: FileCheck,
    title: "Aposentadoria",
    description:
      "Solicitação e acompanhamento de processos de aposentadoria por tempo de contribuição, idade, invalidez ou compulsória.",
  },
  {
    icon: HeartPulse,
    title: "Pensão por Morte",
    description:
      "Concessão de pensão aos dependentes legais do servidor falecido, conforme legislação vigente.",
  },
  {
    icon: Calculator,
    title: "Simulação de Aposentadoria",
    description:
      "Realize uma simulação para saber quando você poderá se aposentar e qual será o valor estimado do benefício.",
  },
  {
    icon: FileText,
    title: "Certidões e Declarações",
    description:
      "Emissão de declarações para fins de comprovação previdenciária.",
  },
  {
    icon: Clock,
    title: "Averbação de Tempo",
    description:
      "Averbação de tempo de serviço público ou privado para fins de aposentadoria.",
  },
  {
    icon: Users,
    title: "Recadastramento",
    description:
      "Atualização cadastral obrigatória para aposentados e pensionistas, conforme calendário anual.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os principais serviços oferecidos pelo PRESERV aos
            servidores públicos municipais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicos.map((servico) => (
            <Card
              key={servico.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <servico.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{servico.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {servico.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
