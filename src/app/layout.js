import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import NavbarSub from "./components/Navbar/NavbarSub";
import Nav from "./components/Navbar/Nav";
import { I18nProvider } from "../utils/I18nProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
{
  /* <link rel="icon" href="/favicon.ico" sizes="any" /> */
}

export const metadata = {
  title: "Centro de Atención Familiar A.C.",
  description: `En nuestra organización, nos dedicamos a brindar apoyo y orientación a personas
  y comunidades para promover y mejorar la salud mental, emocional, física y espiritual.
  Guiados por los valores de amor, respeto, empatía y tolerancia, trabajamos todos los días
  para mejorar la calidad de vida de aquellos a quienes servimos`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body suppressHydrationWarning={true} className={inter.className}>
      <I18nProvider>
        {/* <link rel="icon" href="../../public/favicon.ico" /> */}

        {/* <Navbar /> */}
        <Nav />
        {children}
        </I18nProvider>
      </body>
    </html>
  );
}
