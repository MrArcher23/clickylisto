import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de Contraseñas Seguras Gratis - ClickyListo",
  description:
    "Crea contraseñas fuertes y seguras al instante con nuestro generador de contraseñas aleatorias. Personaliza la longitud y los caracteres para satisfacer tus necesidades de seguridad. 100% gratis y sin registro.",
  keywords: [
    "generador de contraseñas",
    "contraseñas seguras",
    "password generator",
    "crear contraseña fuerte",
    "generador de passwords",
    "contraseña aleatoria",
    "seguridad online"
  ],
  openGraph: {
    title: "Generador de Contraseñas Seguras - ClickyListo",
    description: "Crea contraseñas fuertes y seguras al instante. Personaliza longitud y caracteres según tus necesidades.",
    url: "https://clickylisto.com/passwordgen",
    type: "website",
    images: [
      {
        url: "/og-passwordgen.png",
        width: 1200,
        height: 630,
        alt: "Generador de Contraseñas Seguras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Contraseñas Seguras",
    description: "Crea contraseñas fuertes y seguras al instante con ClickyListo.",
    images: ["/twitter-passwordgen.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/passwordgen",
  },
};
const PassGenClientComponent = dynamic(() => import("./PassGenClientComponent"), { ssr: false });

export default function PassGenerator() {
  return (
    <HeaderPage
      titleText="Generador de Contraseñas Seguras"
      subTitleOne="Crea contraseñas "
      subTitleBold="fuertes y seguras al instante,"
      subTitleTwo="con nuestro generador de contraseñas aleatorias.">
      <PassGenClientComponent />
    </HeaderPage>
  );
}
