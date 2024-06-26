"use client";

import React, { useState } from "react";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { useShare, useClipboard } from "../utils/useUtilityHooks";

import posthog from "posthog-js";
import { toast } from "sonner";
import { Copy, RefreshCcw, Share2, Eraser } from "lucide-react";

export default function ShortLinkClientComponent() {
  const { copyText } = useClipboard();
  const { shareLink } = useShare();
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [lastSentLink, setLastSentLink] = useState("");

  const handleShortenLink = async () => {
    if (link === lastSentLink) {
      toast.error("El enlace ya esta generado");
      return;
    }

    const apiUrl = "https://qlhux7yfq1.execute-api.us-east-1.amazonaws.com/prod/v1/create";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ enlace: link })
      });

      if (!response.ok) {
        throw new Error("Failed to shorten link");
      }

      const data = await response.json();
      setShortenedLink(data.enlace);
      setLastSentLink(link); // Actualiza el último enlace enviado
    } catch (error) {
      console.error("Error:", error);
      alert("Error al acortar el enlace");
    }
  };

  const clearText = () => {
    setLink("");
    setShortenedLink("");
    toast.success("Texto Borrado");
    posthog.capture("Borrar Texto", { elemento: "Utilidades_texto" });
  };

  return (
    <>
      <div className="grid gap-4">
        <section className="flex w-full justify-end">
          <Input
            placeholder="Pega tu enlace aqui"
            className="text-2xl"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <ActionButton
            className="absolute"
            variant="outline"
            size="icon"
            onClick={() => {
              clearText();
            }}
            disabled={!link.trim()}>
            <Eraser />
          </ActionButton>
        </section>
        <section className="flex w-full justify-end">
          <Input
            className="text-2xl"
            readOnly
            value={shortenedLink}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className="flex gap-1 absolute">
            <ActionButton
              variant="outline"
              size="icon"
              onClick={() => {
                shareLink(shortenedLink);
              }}
              disabled={!shortenedLink.trim()}>
              <Share2 />
            </ActionButton>
            <ActionButton
              variant="outline"
              size="icon"
              onClick={() => {
                copyText(shortenedLink);
              }}>
              <Copy />
            </ActionButton>
          </div>
        </section>
        <div>
          <ActionButton
            className="w-full"
            TextAction="Acortar Enlace"
            onClick={() => handleShortenLink()}>
            <RefreshCcw className="ml-2" />
          </ActionButton>
        </div>
      </div>
    </>
  );
}
5;
