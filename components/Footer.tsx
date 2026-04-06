export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
          <span className="text-slate-400 font-semibold">
            QuitaDoc
          </span>
        </div>

        <div className="text-center text-xs">
          Advogados registrados na OAB · Atendimento em todo o Brasil
        </div>

        <div className="text-xs text-center">
          Esta página tem caráter informativo. O contato não estabelece relação
          advocatícia.
        </div>
      </div>
    </footer>
  );
}
