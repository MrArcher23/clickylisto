import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acortador de Enlaces Instantáneo - ClickyListo",
  description:
    "Simplifica tus enlaces con nuestro acortador de enlaces. Ideal para usuarios que necesitan compartir enlaces de manera más eficiente y segura. Acorta tus URLs largas en un solo clic y comparte tus enlaces fácilmente en redes sociales, correos electrónicos y otros medios."
};
const UuidGenClientComponent = dynamic(() => import("./ShortLinkClientComponent"), { ssr: false });

export default function ShortLinkGenerator() {
  return (
    <HeaderPage
      titleText="Acortador de Enlaces"
      subTitleOne="Acorta tus URLs largas en"
      subTitleBold="un solo clic"
      subTitleTwo="y comparte tus enlaces fácilmente.">
      <UuidGenClientComponent />
    </HeaderPage>
  );
}
