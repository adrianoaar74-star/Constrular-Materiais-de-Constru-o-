import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Constrular Materiais | Tudo para sua obra",
    template: "%s | Constrular Materiais",
  },
  description: "Materiais de construção, ferramentas e acabamentos com qualidade, bons preços e atendimento especializado.",
  applicationName: "Constrular Materiais",
  keywords: ["materiais de construção", "ferramentas", "tintas", "reforma", "orçamento de materiais"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo-principal" className="skip-link">Ir para o conteúdo principal</a>
        <div id="conteudo-principal" tabIndex={-1}>{children}</div>
      </body>
    </html>
  );
}
