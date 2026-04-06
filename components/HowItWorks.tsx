const steps = [
  {
    number: "1",
    color: "bg-blue-600",
    title: "Você nos conta a situação",
    description:
      "Via WhatsApp, em linguagem simples. Não precisa saber nada de direito — é só contar o que está acontecendo com o seu carro e o que você recebeu.",
  },
  {
    number: "2",
    color: "bg-blue-600",
    title: "Analisamos o seu processo",
    description:
      "Nossos advogados consultam o processo no tribunal e verificam se existem irregularidades, prazo para defesa ou possibilidade de acordo.",
  },
  {
    number: "3",
    color: "bg-blue-600",
    title: "Apresentamos as opções",
    description:
      "Explicamos em linguagem clara o que pode ser feito: contestar a ação, negociar com o banco, pedir liminar para suspender a apreensão, ou outras estratégias conforme o seu caso.",
  },
  {
    number: "✓",
    color: "bg-green-600",
    title: "Você decide — nós agimos",
    description:
      "Se quiser nossa representação, cuidamos de tudo: petições, prazos, audiências. Você fica tranquilo enquanto a gente trabalha para recuperar ou manter o seu veículo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="o-que-fazer" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que acontece depois que você nos chama?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Processo simples e rápido — sem burocracia, sem jargão jurídico difícil.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-6 items-start card-hover bg-slate-900 border border-white/5 rounded-2xl p-6 md:p-7"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center font-black text-xl`}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
