"use client";

import React, { useEffect, useState } from "react";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

import posthog from "posthog-js";
import { toast } from "sonner";
import { Copy, Share2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function PassGenClientComponent() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Función para generar la contraseña aleatoria
  const generatePassword = () => {
    const numbers = "0123456789";
    const specialChars = '!@#$%^&*()_+{}:"<>?[];,./`~';
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = lowerCaseChars.toUpperCase();

    let characters = lowerCaseChars + upperCaseChars;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };

  // Generar una contraseña inicial al cargar el componente
  useState(() => {
    generatePassword();
  }, []);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeSpecialChars]);

  const copyText = () => {
    const textToCopy = generatedPassword;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        posthog.capture("Contraseña Copiada", {
          element: "Utilidades_texto",
          text_length: textToCopy.length
        });
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
    toast.success("Contraseña Copiada");
  };
  return (
    <>
      <div className="">
        <div className="grid gap-2">
          <section className="flex justify-end">
            <Input className="text-xl" readOnly value={generatedPassword} placeholder="" />
            <div className="flex gap-1 absolute">
              <ActionButton
                className=""
                variant="outline"
                size="icon"
                TextAction=""
                onClick={() => {
                  copyText();
                }}
                disabled={!generatedPassword.trim()}>
                <Copy />
              </ActionButton>
              <ActionButton
                variant="outline"
                size="icon"
                onClick={() => {
                  navigator.share({
                    url: generatedPassword,
                    text: "Tu contraseña es: "
                  });
                }}>
                <Share2 />
              </ActionButton>
            </div>
          </section>
          <section>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="text-left space-y-0.5">
                <h1>Incluir Simbolos</h1>
                <p className="text-xs text-muted-foreground">
                  {`Simbolos a usar: !@#$%^&*()_+{}:"<>?[];,./~`}
                </p>
              </div>
              <div>
                <Switch
                  checked={includeSpecialChars}
                  onCheckedChange={(checked) => {
                    setIncludeSpecialChars(checked);
                    generatePassword();
                  }}
                />
              </div>
            </div>
            <div className="flex-col items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="flex justify-between text-left space-y-0.5 mb-4">
                <div>
                  <h1>Longitud de la contrasena</h1>
                  <p className="text-xs text-muted-foreground">
                    {`Simbolos a usar: !@#$%^&*()_+{}:"<>?[];,./~`}
                  </p>
                </div>
                <div>
                  <Badge>{passwordLength}</Badge>
                </div>
              </div>
              <div>
                <Slider
                  defaultValue={[8]}
                  min={8}
                  max={32}
                  step={2}
                  onValueChange={(value) => {
                    setPasswordLength(value[0]);
                    generatePassword();
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
