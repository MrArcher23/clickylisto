import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de UUID Gratis - ClickyListo",
  description:
    "Crea identificadores únicos universales (UUID) de forma segura y aleatoria con nuestro generador de UUID. Ideal para desarrolladores y profesionales de TI que necesitan UUIDs para proyectos de software, bases de datos y más. Genera y copia UUIDs al instante con un solo clic.",
  keywords: [
    "generador UUID",
    "UUID generator",
    "generar UUID",
    "identificador único",
    "UUID v4",
    "generador de identificadores",
    "herramienta para desarrolladores"
  ],
  openGraph: {
    title: "Generador de UUID - ClickyListo",
    description: "Crea identificadores únicos universales (UUID) de forma segura y aleatoria. Ideal para desarrolladores.",
    url: "https://clickylisto.com/uuidgen",
    type: "website",
    images: [
      {
        url: "/og-uuidgen.png",
        width: 1200,
        height: 630,
        alt: "Generador de UUID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de UUID",
    description: "Crea identificadores únicos universales (UUID) de forma segura y aleatoria.",
    images: ["/twitter-uuidgen.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/uuidgen",
  },
};
const UuidGenClientComponent = dynamic(() => import("./UuidGenClientComponent"), { ssr: false });

export default function UuidGenerator() {
  return (
    <HeaderPage
      titleText="Generador de UUID"
      subTitleOne="Crea identificadores únicos universales (UUID) de "
      subTitleBold="forma segura y aleatoria"
      subTitleTwo="con nuestro generador de UUID.">
      <UuidGenClientComponent />
    </HeaderPage>
  );
}
