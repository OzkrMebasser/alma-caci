
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Centro de Atención Familiar A.C.",
  description: `En nuestra organización, nos dedicamos a brindar apoyo y orientación a personas
  y comunidades para promover y mejorar la salud mental, emocional, física y espiritual.
  Guiados por los valores de amor, respeto, empatía y tolerancia, trabajamos todos los días
  para mejorar la calidad de vida de aquellos a quienes servimos`,
  icons: {
    icon: "/favicon.png",
  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}  className={inter.className}>
      <Navbar/>
        {children}</body>
    </html>
  );
}
