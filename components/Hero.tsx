import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bg pt-16 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/30 mb-6 fade-up">
          Busca e Apreensão de Veículo
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 fade-up-2">
          Estão querendo tomar
          <span className="text-red-400"> o seu carro?</span>
          <br />
          <span className="text-blue-300">A gente pode te defender.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed fade-up-3 max-w-2xl mx-auto">
          Se você recebeu uma notificação de busca e apreensão, foi intimado ou
          o seu veículo já está ameaçado — ainda existe caminho jurídico.{" "}
          <strong className="text-white">
            Fale com nossos advogados agora e descubra como se defender.
          </strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up-3">
          <Link
            href="#contato"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-green-900/40"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Falar com advogado no WhatsApp
          </Link>
          <Link
            href="#o-que-fazer"
            className="border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-5 rounded-2xl text-lg transition-colors flex items-center justify-center"
          >
            Entender meus direitos
          </Link>
        </div>

        <p className="text-xs text-slate-500 mt-5">
          Atendimento em todo o Brasil · Resposta rápida
        </p>
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
