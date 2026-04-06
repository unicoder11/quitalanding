const testimonials = [
  {
    stars: 5,
    quote:
      "Recebi o mandado de busca e apreensão numa sexta à noite. Entrei em contato e no mesmo dia já tinham analisado meu caso e entrado com petição. Meu carro foi devolvido.",
    name: "Roberto A.",
    location: "São Paulo, SP",
    color: "bg-blue-800",
    initial: "R",
  },
  {
    stars: 5,
    quote:
      "Eu nem sabia que havia um processo aberto no meu nome. Eles encontraram um erro na notificação do banco e conseguiram anular a ação. Fiquei aliviada demais.",
    name: "Cristiane M.",
    location: "Belo Horizonte, MG",
    color: "bg-purple-800",
    initial: "C",
  },
  {
    stars: 5,
    quote:
      "Fui bem claro que não tinha condição de pagar tudo de vez. Eles negociaram com o banco um parcelamento que cabia no meu orçamento e o processo foi encerrado.",
    name: "Marcelo S.",
    location: "Curitiba, PR",
    color: "bg-emerald-800",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que dizem nossos clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-white/5 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
