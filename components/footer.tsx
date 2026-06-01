import Link from "next/link"
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary font-bold text-lg">
                P
              </div>
              <div>
                <p className="font-bold text-lg">PRESERV</p>
                <p className="text-xs opacity-80">Sarandi - PR</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Caixa de Aposentadoria e Pensão dos Servidores Municipais de Sarandi - Garantindo a segurança 
              previdenciária dos servidores públicos municipais.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#institucional" className="opacity-80 hover:opacity-100 transition-opacity">
                  Institucional
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="opacity-80 hover:opacity-100 transition-opacity">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#legislacao" className="opacity-80 hover:opacity-100 transition-opacity">
                  Legislação
                </Link>
              </li>
              <li>
                <Link href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#transparencia" className="opacity-80 hover:opacity-100 transition-opacity">
                  Portal da Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-80" />
                <span className="opacity-90">
                  Av. Londrina, 72 - Centro<br />
                  Sarandi - PR, 87111-220
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-80" />
                <a href="tel:4430326400" className="opacity-90 hover:opacity-100">
                  (44) 3032-6400
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/554430326400" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-sm mb-2">Horário de Atendimento</h4>
              <p className="text-sm opacity-80">
                Seg a Sex: 07:30-11:30 / 13:00-17:00
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-80 text-center md:text-left">
              © {currentYear} PRESERV - Caixa de Aposentadoria e Pensão dos Servidores Municipais de Sarandi. 
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Política de Privacidade
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Acessibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
