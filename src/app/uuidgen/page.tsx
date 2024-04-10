import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de UUID",
  description:
    "Crea identificadores únicos universales (UUID) de forma segura y aleatoria con nuestro generador de UUID en ClickyListo. Ideal para desarrolladores y profesionales de TI que necesitan UUIDs para proyectos de software, bases de datos y más. Genera y copia UUIDs al instante con un solo clic."
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
