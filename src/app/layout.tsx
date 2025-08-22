import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lotto Latina Resultados Loterias",
  description:
    "Descarga Lotto Latina y disfruta de la mejor experiencia de lotería en tu móvil. Resultados de todos los sorteos y loterias de toda America Latina, Centro America, en tiempo real, fácil de usar y totalmente seguro.",
  keywords: ["LottoLatina", "Lotto latina", "Lotto Latina Resultados Loterias"],
  authors: [{ name: "Carlos Jose Diaz", url: "https://www.lottolatina.com" }],
  creator: "DiazCode",
  publisher: "DiazCode",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "LottoLatina - Resultados de Loterias",
    description:
      "Descarga Lotto Latina y disfruta de la mejor experiencia de lotería en tu móvil.",
    url: "https://www.lottolatina.com",
    siteName: "LottoLatina",
    images: [
      {
        url: "https://www.lottolatina.com/logo.png",
        width: 500,
        height: 500,
        alt: "Logo LottoLatina",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lottolatina.com",
    languages: {
      "es-DO": "https://www.lottolatina.com",
      "en-US": "https://www.lottolatina.com",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
