"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"; // Mudança aqui
import {
  Search,
  Menu,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#institucional", label: "Institucional" },
  { href: "#servicos", label: "Serviços" },
  { href: "#legislacao", label: "Legislação" },
  { href: "#faq", label: "Dúvidas Frequentes" },
  { href: "#contato", label: "Contato" },
  {
    href: "https://sicapweb.infoprev.com.br/sicap-war/faces/LoginPage.xhtml",
    label: "Acompanhe seu processo",
  },
];

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Inicializa o estado com o termo que já está na URL (se houver)
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sincroniza o input caso o parâmetro da URL mude externamente
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redireciona para /busca?q=termo-digitado
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false); // Fecha o menu de busca mobile se estiver aberto
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Barra superior com informações de contato */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:4430326400"
                className="flex items-center gap-1 hover:underline"
              >
                <Phone className="h-3 w-3" />
                <span>(44) 3032-6400</span>
              </a>
              <span className="hidden md:flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Seg a Sex: 07:30-11:30 / 13:00-17:00</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Caixa-de-Aposentadoria-e-Pens%C3%A3o-dos-Servidores-Municipais-de-Sarandi-100076590457274/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/preserv_sarandi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/554430326400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-80"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  width={500}
                  height={500}
                  alt="Logo do Preserv"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-foreground text-lg leading-tight">
                  PRESERV
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  Sarandi - PR
                </p>
              </div>
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-2">
              {/* Busca Desktop */}
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center"
              >
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Buscar no site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 pr-8 text-sm"
                    aria-label="Campo de busca"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Buscar"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Busca Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Abrir busca"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Portal da Transparência */}
              <a
                href="https://sarandi.eloweb.net/portaltransparencia/2/"
                target="_blank"
                className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Portal da Transparência
              </a>

              {/* Menu Mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Abrir menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <nav className="flex flex-col gap-4 mt-8">
                    <a
                      href="https://sarandi.eloweb.net/portaltransparencia/2/"
                      target="_blank"
                      className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                    >
                      Portal da Transparência
                    </a>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">
                        Contato
                      </p>
                      <a
                        href="tel:4430326400"
                        className="flex items-center gap-2 text-foreground hover:text-primary py-1"
                      >
                        <Phone className="h-4 w-4" />
                        (44) 3032-6400
                      </a>
                      <div className="flex items-start gap-2 text-foreground py-1">
                        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                        <span className="text-sm">
                          Av. Londrina, 72 - Centro, Sarandi - PR
                        </span>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Busca Mobile Expandida */}
          {isSearchOpen && (
            <div className="pb-4 md:hidden">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  type="search"
                  placeholder="Buscar no site..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                  aria-label="Campo de busca"
                />
                <Button type="submit" size="icon" aria-label="Buscar">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
