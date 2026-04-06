import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuitaDoc — Seu carro está sendo tomado? Fale com um advogado agora.",
  description:
    "Defesa jurídica especializada em busca e apreensão de veículos em todo o Brasil. Atendimento urgente, sem burocracia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
