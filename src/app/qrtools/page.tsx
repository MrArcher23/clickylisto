import React from "react";
import posthog from "posthog-js";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click y listo - Generacion de QR",
  description: "Generación Instantánea de Códigos QR"
};

const QRClient = dynamic(() => import("./QRClientComponent"), { ssr: false });

export default function QrTools() {
  return (
    <>
      <HeaderPage
        titleText="Generación Instantánea de Códigos QR"
        subTitleOne="Escribe y observa cómo tu enlace se transforma en un código"
        subTitleBold="QR al instante."
        subTitleTwo="Comparte tu QR de forma rápida y mágica.">
        <QRClient />
      </HeaderPage>
    </>
  );
}
