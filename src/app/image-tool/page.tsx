import React from "react";
import { toast } from "sonner";
import { HeaderPage } from "@/components/HeaderPage";
import { ActionButton } from "@/components/ActionButton";
import { TextArea } from "@/components/TextArea";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click y listo - Optimizacion de imagen",
  description: "Optimiza tu imagen: Optimiza el tamaño de tu imagen."
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
