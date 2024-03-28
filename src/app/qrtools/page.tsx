"use client";

import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import posthog from "posthog-js";
import { Input } from "@/components/ui/input";
import { HeaderPage } from "@/components/HeaderPage";
import { ActionButton } from "@/components/ActionButton";

export default function QrTools() {
  const [qrValue, setQrValue] = useState("");
  const handleOnChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setQrValue(value);
  };

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <HeaderPage
        titleText="Generación Instantánea de Códigos QR"
        subTitleOne="Escribe y observa cómo tu enlace se transforma en un código"
        subTitleBold="QR al instante."
        subTitleTwo="Comparte información de forma rápida y mágica.">
        <div className="flex-1 md:flex gap-8">
          <Input onChange={handleOnChange} placeholder="Escribe o pega tu enlace aquí" />
          <div>
            <ActionButton
              className="w-full"
              TextAction="Descargar"
              disabled={!qrValue}
              onClick={() => {
                downloadQRCode();
                toast.success("Tu Qr ha sido generado");
              }}>
              <Download />
            </ActionButton>
          </div>
        </div>
        <div className="flex mt-4 justify-center content-center">
          <QRCode
            id="qr-gen"
            fgColor="#000000"
            value={qrValue}
            size={320}
            level={"H"}
            includeMargin={true}
          />
        </div>
      </HeaderPage>
    </>
  );
}
