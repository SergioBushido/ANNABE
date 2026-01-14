import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "MANTENIMIENTOS ANNABE | Alexis Arrocha",
  description: "Servicios profesionales de Fontanería, Electricidad y Gas por Alexis Arrocha. Calidad y confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} font-body antialiased selection:bg-brand-accent selection:text-brand-darker bg-brand-darker text-slate-50`}
      >
        {children}
        {/* Botón Flotante de WhatsApp */}
        <a
          href="https://wa.me/34637417990"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </body>
    </html>
  );
}
