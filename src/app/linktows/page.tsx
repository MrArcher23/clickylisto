import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de Enlaces de WhatsApp Gratis - ClickyListo",
  description:
    "Genera enlaces directos para iniciar conversaciones en WhatsApp con un mensaje predefinido. Crea links personalizados de WhatsApp para negocios, marketing y atención al cliente. Herramienta gratuita y fácil de usar.",
  keywords: [
    "generador de enlaces WhatsApp",
    "link de WhatsApp",
    "crear enlace WhatsApp",
    "WhatsApp link generator",
    "enlace directo WhatsApp",
    "wa.me",
    "WhatsApp Business"
  ],
  openGraph: {
    title: "Generador de Enlaces de WhatsApp - ClickyListo",
    description: "Genera enlaces directos para iniciar conversaciones en WhatsApp con un mensaje predefinido.",
    url: "https://clickylisto.com/linktows",
    type: "website",
    images: [
      {
        url: "/og-linktows.png",
        width: 1200,
        height: 630,
        alt: "Generador de Enlaces de WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Enlaces de WhatsApp",
    description: "Genera enlaces directos para WhatsApp con mensaje predefinido.",
    images: ["/twitter-linktows.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/linktows",
  },
};
const MsgToWsClientComponent = dynamic(() => import("./MsgToWsClientComponent"), { ssr: false });

export default function LinkToWs() {
  return (
    <HeaderPage
      titleText="Enlaces Personalizados de WhatsApp"
      subTitleOne="Genera enlaces directos para iniciar"
      subTitleBold="conversaciones en WhatsApp"
      subTitleTwo="con un mensaje predefinido.">
      <MsgToWsClientComponent />
    </HeaderPage>
  );
}
