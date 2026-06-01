"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contato() {
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

          {/* Formulário de Contato Modificado */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mudança na Action: Removemos o /ajax/ para evitar o bloqueio de CORS */}
              <form
                action="https://formsubmit.co/preserv@sarandi.pr.gov.br"
                method="POST"
                className="space-y-4"
              >
                {/* Ativamos o captcha para proteger o e-mail institucional contra bots */}
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />

                {/* Opcional: Se quiser redirecionar de volta para o site após o envio */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://preserv.pr.gov.br#contato"
                />

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

                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
