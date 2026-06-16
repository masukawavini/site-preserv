"use client";

import { useState, useEffect } from "react";

export function AvisoMigracao() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ativa o pop-up automaticamente ao carregar a página
    // Você também pode adicionar uma lógica aqui para não mostrar caso o usuário já tenha fechado nesta sessão
    const jaVisto = sessionStorage.getItem("aviso-migracao-visto");
    if (!jaVisto) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("aviso-migracao-visto", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white text-black border-2 border-black max-w-lg w-full p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
        
        {/* Cabeçalho */}
        <div className="border-b-2 border-black pb-2 flex justify-between items-start">
          <h2 className="text-xl font-bold tracking-tight uppercase">
            ⚠️ Comunicado Importante: Migração de Sistema
          </h2>
          <button 
            onClick={handleClose}
            className="font-mono font-bold hover:bg-black hover:text-white px-2 py-0.5 border border-transparent hover:border-black transition-colors"
          >
            [X]
          </button>
        </div>

        {/* Corpo do Texto */}
        <div className="text-sm space-y-3 leading-relaxed">
          <p>
            Informamos que, devido à implantação do novo <strong>Sistema de Gestão Pública (OXY)</strong>, os portais e sistemas municipais passarão por uma migração de dados programada.
          </p>
          
          <div className="bg-gray-100 p-3 border border-black font-mono text-xs space-y-1">
            <p><strong>Período de Indisponibilidade:</strong></p>
            <p>• Início: 31 de Julho de 2026 (Sexta-feira) às 17h</p>
            <p>• Previsão de Retorno: 10 de Agosto de 2026 (Segunda-feira)</p>
          </div>

          <p className="font-semibold">O que muda nesse período?</p>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li><strong>Portal da Transparência:</strong> Ficará inativo.</li>
            <li><strong>Portal do Holerite:</strong> Ficará inativo, solicite o holerite através do número (44) 3032-6400.</li>
          </ul>
        </div>

        {/* Botão de Fechar */}
        <button
          onClick={handleClose}
          className="mt-2 w-full bg-black text-white font-bold py-2 uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none"
        >
          Entendido
        </button>
        
      </div>
    </div>
  );
}