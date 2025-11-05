import React from "react";
import { toast } from "sonner";
import { HeaderPage } from "@/components/HeaderPage";
import { ActionButton } from "@/components/ActionButton";
import { TextArea } from "@/components/TextArea";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertidor de Texto: Mayúsculas a Minúsculas Gratis",
  description:
    "Convierte texto entre mayúsculas y minúsculas al instante. Capitaliza palabras, ajusta después de puntos y optimiza tu texto fácilmente. Herramienta gratuita online sin registro.",
  keywords: [
    "convertidor de texto",
    "mayúsculas a minúsculas",
    "capitalizar texto",
    "convertir mayúsculas",
    "convertir minúsculas",
    "herramienta de texto",
    "formato de texto online"
  ],
  openGraph: {
    title: "Convertidor de Texto: Mayúsculas a Minúsculas - ClickyListo",
    description: "Convierte texto entre mayúsculas y minúsculas al instante. Capitaliza palabras y optimiza tu texto fácilmente.",
    url: "https://clickylisto.com/texttools",
    type: "website",
    images: [
      {
        url: "/og-texttools.png",
        width: 1200,
        height: 630,
        alt: "Convertidor de Texto Mayúsculas Minúsculas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertidor de Texto: Mayúsculas a Minúsculas",
    description: "Convierte texto entre mayúsculas y minúsculas al instante con ClickyListo.",
    images: ["/twitter-texttools.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/texttools",
  },
};

const TextToolsComponent = dynamic(() => import("./TextToolsComponent"), { ssr: false });

export default function TextTools() {
  return (
    <>
      <HeaderPage
        titleText="Mayúsculas a minúsculas"
        subTitleBold="Optimiza tu texto:"
        subTitleTwo="Convierte entre mayúsculas y minúsculas, capitaliza palabras y corrige después de puntos.">
        <TextToolsComponent />
      </HeaderPage>
    </>
  );
}
