"use client";

import React, { useState } from "react";

import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download } from "lucide-react";
import QRCode from "qrcode.react";

export default function QRClientComponent() {
  const [qrValue, setQrValue] = useState("");
  const handleOnChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setQrValue(value);
  };

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen") as HTMLCanvasElement | null;
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${qrValue}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      console.error("No se pudo encontrar el elemento canvas");
    }
  };

  return (
    <>
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
    </>
  );
}
