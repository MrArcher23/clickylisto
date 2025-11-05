import React from "react";
import { toast } from "sonner";
import { HeaderPage } from "@/components/HeaderPage";
import { ActionButton } from "@/components/ActionButton";
import { TextArea } from "@/components/TextArea";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimizador de Imágenes Online Gratis - ClickyListo",
  description: "Optimiza, redimensiona y convierte imágenes online gratis. Cambia el formato (JPG, PNG, WebP), ajusta el tamaño y comprime imágenes para la web. Herramienta rápida y fácil de usar sin registro.",
  keywords: [
    "optimizar imagen",
    "redimensionar imagen",
    "convertir imagen",
    "comprimir imagen",
    "optimizador de imágenes",
    "resize image",
    "image optimizer",
    "convertir JPG PNG"
  ],
  openGraph: {
    title: "Optimizador de Imágenes Online - ClickyListo",
    description: "Optimiza, redimensiona y convierte imágenes online gratis. Cambia formatos y ajusta tamaños fácilmente.",
    url: "https://clickylisto.com/image-tool",
    type: "website",
    images: [
      {
        url: "/og-image-tool.png",
        width: 1200,
        height: 630,
        alt: "Optimizador de Imágenes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimizador de Imágenes Online",
    description: "Optimiza, redimensiona y convierte imágenes online gratis.",
    images: ["/twitter-image-tool.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/image-tool",
  },
};

const ImageFormComponent = dynamic(() => import("./ImageForm"), { ssr: false });

export default function TextTools() {
  return (
    <>
      <HeaderPage
        titleText="Optimización de Imágenes"
        subTitleBold="Mejora y ajusta tus imágenes:"
        subTitleTwo="Redimensiona, cambia el formato y optimiza tus imágenes para la web.">
        <ImageFormComponent />
      </HeaderPage>
    </>
  );
}
