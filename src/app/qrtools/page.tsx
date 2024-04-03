import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click y listo - Generacion de QR",
  description: "Generación Instantánea de Códigos QR",
  keywords: [
    "herramientas en línea",
    "generador de QR",
    "convertidor de texto",
    "mayúsculas a minúsculas",
    "acortador de enlaces",
    "generador de texto aleatorio",
    "página de emoticones",
    "generador de enlace WhatsApp",
    "herramientas prácticas",
    "soluciones rápidas"
  ]
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
