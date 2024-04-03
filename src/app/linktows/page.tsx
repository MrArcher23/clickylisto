import React, { useState } from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click y listo - Genera link a tu whatsapp",
  description:
    "Genera enlaces directos para iniciar conversaciones en WhatsApp con un mensaje predefinido."
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
