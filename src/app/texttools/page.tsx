import React from "react";
import { toast } from "sonner";
import { HeaderPage } from "@/components/HeaderPage";
import { ActionButton } from "@/components/ActionButton";
import { TextArea } from "@/components/TextArea";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click y listo - Mayúsculas a minúsculas ",
  description:
    "Optimiza tu texto: convierte textos. De mayúsculas o minúsculas, capitaliza palabras y ajusta después de puntos."
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
