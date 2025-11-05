import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de Códigos QR Gratis Online - ClickyListo",
  description: "Crea códigos QR personalizados gratis en segundos. Genera QR para URLs, textos, WiFi y más. Descarga en alta calidad PNG. Herramienta online sin registro, rápida y fácil de usar.",
  keywords: [
    "generador QR",
    "código QR gratis",
    "crear QR online",
    "QR generator",
    "generador de códigos QR",
    "QR code",
    "crear código QR",
    "QR personalizado"
  ],
  openGraph: {
    title: "Generador de Códigos QR Gratis - ClickyListo",
    description: "Crea códigos QR personalizados gratis en segundos. Genera QR para URLs, textos y más.",
    url: "https://clickylisto.com/qrtools",
    type: "website",
    images: [
      {
        url: "/og-qrtools.png",
        width: 1200,
        height: 630,
        alt: "Generador de Códigos QR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Códigos QR Gratis - ClickyListo",
    description: "Crea códigos QR personalizados gratis en segundos",
    images: ["/twitter-qrtools.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/qrtools",
  },
};

const QRClient = dynamic(() => import("./QRClientComponent"), { ssr: false });

export default function QrTools() {
  return (
    <>
      <HeaderPage
        titleText="Generación Instantánea de Códigos QR"
        subTitleOne="Escribe y observa cómo tu enlace se transforma en un código"
        subTitleBold="QR al instante."
        subTitleTwo="Comparte de forma rápida y mágica.">
        <QRClient />
      </HeaderPage>
    </>
  );
}
