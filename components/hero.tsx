import Link from "next/link";
import { Shield, FileText, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm mb-6">
            <Shield className="h-4 w-4" />
            <span>Autarquia de Previdência Municipal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
            Caixa de Aposentadoria e Pensão dos Servidores Municipais de Sarandi
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed text-pretty">
            Garantindo a segurança previdenciária dos servidores públicos
            municipais de Sarandi com transparência, eficiência e compromisso
            com o futuro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <a
                href="https://sarandi.eloweb.net/portaltransparencia/2/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FileText className="h-5 w-5" />
                Portal da Transparência
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://radardatransparencia.atricon.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Radar da Transparência
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a
                href="https://sarandi.eloweb.net/WebEloPortalRH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Holerite
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Cards de Acesso Rápido */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a
            href="#servicos"
            className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-6 text-center transition-colors"
          >
            <FileText className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Serviços</h3>
            <p className="text-sm opacity-80">
              Aposentadoria, pensões e benefícios
            </p>
          </a>
          <a
            href="#institucional"
            className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-6 text-center transition-colors"
          >
            <Users className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Institucional</h3>
            <p className="text-sm opacity-80">Conheça nossa estrutura</p>
          </a>
          <a
            href="#faq"
            className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-6 text-center transition-colors"
          >
            <Shield className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Dúvidas Frequentes</h3>
            <p className="text-sm opacity-80">Tire suas dúvidas</p>
          </a>
        </div>
      </div>
    </section>
  );
}
