"use client";

import React, { useState } from "react";

import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { TextArea } from "@/components/TextArea";
import posthog from "posthog-js";
import { toast } from "sonner";
import { Link, Copy, Eraser } from "lucide-react";

const countryOptions = [
  { value: "1", label: "🇺🇸 +1", countryCode: "US" },
  { value: "52", label: "🇲🇽 +52", countryCode: "MX" },
  { value: "34", label: "🇪🇸 +34", countryCode: "ES" },
  { value: "54", label: "🇦🇷 +54", countryCode: "AR" },
  { value: "55", label: "🇧🇷 +55", countryCode: "BR" },
  { value: "56", label: "🇨🇱 +56", countryCode: "CL" },
  { value: "57", label: "🇨🇴 +57", countryCode: "CO" },
  { value: "58", label: "🇻🇪 +58", countryCode: "VE" },
  { value: "51", label: "🇵🇪 +51", countryCode: "PE" },
  { value: "593", label: "🇪🇨 +593", countryCode: "EC" },
  { value: "591", label: "🇧🇴 +591", countryCode: "BO" },
  { value: "595", label: "🇵🇾 +595", countryCode: "PY" },
  { value: "598", label: "🇺🇾 +598", countryCode: "UY" },
  { value: "507", label: "🇵🇦 +507", countryCode: "PA" },
  { value: "506", label: "🇨🇷 +506", countryCode: "CR" },
  { value: "503", label: "🇸🇻 +503", countryCode: "SV" },
  { value: "502", label: "🇬🇹 +502", countryCode: "GT" },
  { value: "501", label: "🇧🇿 +501", countryCode: "BZ" },
  { value: "505", label: "🇳🇮 +505", countryCode: "NI" },
  { value: "504", label: "🇭🇳 +504", countryCode: "HN" },
  { value: "509", label: "🇭🇹 +509", countryCode: "HT" },
  { value: "1", label: "🇩🇴 +1", countryCode: "DO" },
  { value: "53", label: "🇨🇺 +53", countryCode: "CU" },
  { value: "1", label: "🇵🇷 +1", countryCode: "PR" }
];

const stepTexts = [
  "Código de país",
  "Número de WhatsApp",
  "Mensaje para WhatsApp",
  "Click en 'Generar Enlace"
];

export default function MsToWsComponent() {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const defaultOption = countryOptions.find((option) => option.value === "52");
  const [countryCode, setCountryCode] = useState(defaultOption ? defaultOption.value : "");
  const [generatedLink, setGeneratedLink] = useState("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryCodeChange = (value: string) => {
    setCountryCode(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleGenerateLink = () => {
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${countryCode}${phoneNumber}?text=${encodedMessage}`;
    setGeneratedLink(link);
    toast.success("Tu enlace ha sido generado");
  };

  const copyText = () => {
    const textToCopy = generatedLink;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        posthog.capture("Texto Copiado", {
          element: "Utilidades_texto",
          text_length: textToCopy.length
        });
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
    toast.success("Enlace Copiado");
  };
  const clearText = () => {
    setPhoneNumber("");
    setMessage("");
    setGeneratedLink("");
    toast.success("Texto Borrado");
    posthog.capture("Borrar Texto", { elemento: "Utilidades_texto" });
  };

  return (
    <>
      <div className="">
        <div className="grid gap-2">
          <section className="flex flex-wrap justify-between gap-2">
            {stepTexts.map((text, index) => (
              <Badge key={index} variant="secondary">
                {index + 1}.- {text}
              </Badge>
            ))}
          </section>
          <div className="flex gap-2">
            <Select
              value={countryCode}
              defaultValue={defaultOption ? defaultOption.value : ""}
              onValueChange={handleCountryCodeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="5544332211"
            />
          </div>
          <section className="flex justify-end">
            <TextArea
              placeholder="Hola me gustaria contratar tus servicios de marketing.."
              texto={message}
              handleChange={handleChange}
            />
            <ActionButton
              className="absolute"
              variant="outline"
              size="icon"
              TextAction=""
              onClick={() => {
                clearText();
              }}
              disabled={!message.trim()}>
              <Eraser />
            </ActionButton>
          </section>
          <ActionButton
            className="w-full"
            TextAction="Generar Enlace"
            onClick={() => {
              handleGenerateLink();
            }}
            disabled={!phoneNumber || !message}>
            <Link />
          </ActionButton>
          <section className="flex justify-end">
            <Input readOnly value={generatedLink} placeholder="" />
            <ActionButton
              className="absolute"
              variant="outline"
              size="icon"
              TextAction=""
              onClick={() => {
                copyText();
              }}
              disabled={!generatedLink.trim()}>
              <Copy />
            </ActionButton>
          </section>
        </div>
      </div>
    </>
  );
}
