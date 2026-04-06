const reasons = [
  {
    icon: "⚡",
    title: "Resposta em minutos",
    description:
      "Em processos de busca e apreensão, o tempo é crítico. Nossa equipe está disponível para atender com urgência e entrar com defesa antes que seja tarde.",
  },
  {
    icon: "🔎",
    title: "Conhecemos os erros dos bancos",
    description:
      "Muitas ações de busca e apreensão têm irregularidades processuais, valores incorretos ou notificações inválidas. Sabemos onde procurar e como usar isso a seu favor.",
  },
  {
    icon: "💬",
    title: "Comunicação sem complicação",
    description:
      "Sem juridiquês. Explicamos cada passo de forma clara e você sempre sabe o que está acontecendo no seu processo.",
  },
  {
    icon: "🤝",
    title: "Honorários transparentes",
    description:
      "Oferecemos opções de honorários transparentes e parcelamento. Sem surpresas — você sabe exatamente o que vai pagar antes de contratar.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Por que escolher nossa equipe?
          </h2>
          <p className="text-slate-400">
            Atuamos em todo o Brasil, com foco em defesa de devedor em ações de
            crédito veicular.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-white/5 rounded-2xl p-7 card-hover"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
