import { Nunito } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - João Pedro Carvalho",
  description: "Site para apresentação de projetos e meios de contato.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
