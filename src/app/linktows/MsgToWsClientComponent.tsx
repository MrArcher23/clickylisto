"use client";

import React, { useEffect, useState } from "react";
import { Step, countryCodes } from "@/app/utils/typesall/types";

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
import { Link, Copy, Eraser, Share2 } from "lucide-react";
import { countrycodes } from "../utils/data/countrycode/data";

export default function MsToWsComponent() {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const defaultCountry = countrycodes.find((code: countryCodes) => code.value === "52");
  // const [countryCode, setCountryCode] = useState<countryCodes | undefined>(defaultCountry);
  const [countryCode, setCountryCode] = useState<countryCodes | undefined>();
  const [generatedLink, setGeneratedLink] = useState("");
  const [showErrorBorder, setShowErrorBorder] = useState(false);
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/utils/data/stepsmsg");
      const data = await response.json();
      setSteps(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/utils/data/countrycode");
      const data: countryCodes[] = await response.json();
      // Suponiendo que la respuesta es un array y quieres el objeto con value "52"
      const defaultCode = data.find((code) => code.value === "52");
      setCountryCode(defaultCode);
    };

    fetchData();
  }, []);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryCodeChange = (value: string) => {
    const selectedCode = countrycodes.find((code) => code.value === value);
    setCountryCode(selectedCode);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleGenerateLink = () => {
    if (!phoneNumber.trim() || !message.trim()) {
      setShowErrorBorder(true);
      toast.error("Por favor, completa todos los campos.");
      return;
    }
    setShowErrorBorder(false);

    const encodedMessage = encodeURIComponent(message);
    // Comprueba si countryCode es un objeto y tiene la propiedad 'value'.
    const fullPhoneNumber =
      countryCode && countryCode.value ? `${countryCode.value}${phoneNumber}` : phoneNumber;
    const link = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
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
          <section className="flex flex-wrap justify-stretch gap-2">
            {steps.map((step) => (
              <Badge key={step.id} variant="secondary">
                {step.text}
              </Badge>
            ))}
          </section>
          <div className="flex gap-2">
            <Select
              value={countryCode?.value}
              defaultValue={countryCode?.value}
              onValueChange={handleCountryCodeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countrycodes.map((code) => (
                    <SelectItem key={code.id} value={code.value}>
                      {code.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Escribe tu numero de WhatsApp aquí"
              className={`${showErrorBorder && !phoneNumber.trim() ? "border-red-500" : ""} `}
            />
          </div>
          <div>
            <p className="text-xs text-left text-muted-foreground">
              Verifica tu código de país antes de generar el enlace
            </p>
          </div>
          <section className="flex justify-end">
            <TextArea
              placeholder="Hola me gustaría contratar tus servicios de marketing.."
              texto={message}
              handleChange={handleChange}
              className={`${showErrorBorder && !message.trim() ? "border-red-500" : ""} `}
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
            }}>
            <Link className="ml-2" />
          </ActionButton>
          <section className="flex justify-end">
            <Input readOnly value={generatedLink} placeholder="" />
            <div className="flex gap-1 absolute">
              <ActionButton
                className=""
                variant="outline"
                size="icon"
                TextAction=""
                onClick={() => {
                  copyText();
                }}
                disabled={!generatedLink.trim()}>
                <Copy />
              </ActionButton>
              <ActionButton
                className=""
                variant="outline"
                size="icon"
                TextAction=""
                onClick={() => {
                  navigator.share({
                    url: generatedLink,
                    text: "Da click para enviar mensaje"
                  });
                }}
                disabled={!generatedLink.trim()}>
                <Share2 />
              </ActionButton>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
