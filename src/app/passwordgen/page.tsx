import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generador de Contraseñas Seguras - ClickyListo",
  description:
    "Crea contraseñas fuertes y seguras al instante con nuestro generador de contraseñas aleatorias. Personaliza la longitud y los caracteres para satisfacer tus necesidades de seguridad en ClickyListo."
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
