"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5521999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, estou com uma situação de busca e apreensão do meu carro e preciso de ajuda."
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to a real form endpoint (e.g. Resend, Formspree, API route)
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/30 mb-6">
          Não espere — os prazos correm
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
          Fale agora com um advogado
        </h2>

        <p className="text-slate-400 mb-10 leading-relaxed">
          Nossa equipe está disponível para te atender pelo WhatsApp. Conta a
          situação e nós analisamos o que pode ser feito pelo seu veículo.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-colors shadow-lg shadow-green-900/40 w-full sm:w-auto mb-6"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Falar pelo WhatsApp agora
        </a>

        <div className="text-slate-500 text-sm mb-8">
          — ou preencha e entraremos em contato —
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-slate-900 border border-green-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-lg mb-2">Mensagem recebida!</h3>
            <p className="text-slate-400 text-sm">
              Entraremos em contato em breve pelo WhatsApp ou telefone informado.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-left space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                Seu nome
              </label>
              <input
                type="text"
                placeholder="Ex: João Silva"
                required
                className="w-full bg-slate-800 border border-white/10 focus:border-blue-500 outline-none rounded-xl px-4 py-3.5 text-sm placeholder-slate-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                WhatsApp / Telefone
              </label>
              <input
                type="tel"
                placeholder="(XX) 9 0000-0000"
                required
                className="w-full bg-slate-800 border border-white/10 focus:border-blue-500 outline-none rounded-xl px-4 py-3.5 text-sm placeholder-slate-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                Descreva brevemente a situação
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Recebi uma notificação do banco dizendo que vão tomar meu carro..."
                className="w-full bg-slate-800 border border-white/10 focus:border-blue-500 outline-none rounded-xl px-4 py-3.5 text-sm placeholder-slate-600 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-4 rounded-xl transition-colors text-base"
            >
              Solicitar análise →
            </button>
            <p className="text-xs text-slate-600 text-center">
              Seus dados são confidenciais e usados apenas para contato.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}
