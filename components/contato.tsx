"use client"; // Garante o funcionamento dos estados no Next.js

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contato() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);

    try {
      // Envio via AJAX direto para o endpoint do FormSubmit com o seu e-mail
      const response = await fetch(
        "https://formsubmit.co/ajax/preserv@sarandi.pr.gov.br",
        {
          method: "POST",
          body: formData, // Envia todos os campos do formulário automaticamente
        },
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Mensagem enviada com sucesso!",
        });
        (event.target as HTMLFormElement).reset(); // Limpa o formulário após o envio
      } else {
        setStatus({
          type: "error",
          message: "Ocorreu um erro ao enviar. Tente novamente.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Erro de conexão com o servidor." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco ou visite nossa sede
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">
                  PRESERV - Caixa de Aposentadoria e Pensão
                </p>
                <p className="text-muted-foreground">
                  Av. Londrina, 72 - Centro
                </p>
                <p className="text-muted-foreground">Sarandi - PR, 87111-220</p>
                <a
                  href="https://maps.google.com/?q=Av.+Londrina,+72+-+Centro,+Sarandi+-+PR,+87111-220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
                >
                  Ver no Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:4430326400"
                  className="text-foreground font-medium hover:text-primary"
                >
                  (44) 3032-6400
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Segunda a Sexta-feira
                    </span>
                    <span className="text-foreground">
                      07:30-11:30, 13:00-17:00
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Sábado e Domingo
                    </span>
                    <span className="text-foreground text-destructive">
                      Fechado
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* CONFIGURAÇÕES DO FORMSUBMIT */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="Nome"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="Telefone"
                    placeholder="(44) 99999-9999"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto</Label>
                  <Input
                    id="assunto"
                    name="_subject"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="Mensagem"
                    placeholder="Escreva sua mensagem..."
                    rows={4}
                    required
                  />
                </div>

                {status && (
                  <p
                    className={`text-sm font-medium ${status.type === "success" ? "text-emerald-600" : "text-destructive"}`}
                  >
                    {status.message}
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
