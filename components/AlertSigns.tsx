import Link from "next/link";

const situations = [
  {
    icon: "📬",
    text: "Recebi uma carta ou intimação do banco sobre meu carro",
  },
  {
    icon: "🏛️",
    text: "Fui citado em um processo judicial de busca e apreensão",
  },
  {
    icon: "💳",
    text: "Estou com parcelas atrasadas e o banco ameaçou retomar o veículo",
  },
  {
    icon: "🚨",
    text: "Um oficial de justiça veio na minha casa ou trabalho",
  },
  {
    icon: "🚗",
    text: "Meu carro já foi apreendido e eu não sei o que fazer",
  },
  {
    icon: "🤔",
    text: "Não entendi nada do que dizem os documentos que recebi",
  },
];

export default function AlertSigns() {
  return (
    <section className="py-16 bg-slate-900/60">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-200">
          Você está em alguma dessas situações?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {situations.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-red-500/20 rounded-xl p-5 flex gap-4 items-start"
            >
              <span className="text-2xl mt-0.5">{s.icon}</span>
              <p className="text-sm text-slate-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Se você se identificou com qualquer um desses pontos,{" "}
          <Link
            href="#contato"
            className="text-blue-400 underline font-semibold hover:text-blue-300"
          >
            fale com a gente agora
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
