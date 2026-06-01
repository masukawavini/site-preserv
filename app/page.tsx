import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Institucional } from "@/components/institucional";
import { Servicos } from "@/components/servicos";
import { Legislacao } from "@/components/legislacao";
import { FAQ } from "@/components/faq";
import { Contato } from "@/components/contato";
import { Footer } from "@/components/footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense
        fallback={<div className="py-16 text-center">Carregando...</div>}
      >
        <Header />
      </Suspense>
      <main className="flex-1">
        <Hero />
        <Institucional />
        <Servicos />
        <Legislacao />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
