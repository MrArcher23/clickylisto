"use client";

import React, { useEffect, useState } from "react";
import { useClipboard, useShare } from "../utils/useUtilityHooks";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

import posthog from "posthog-js";
import { toast } from "sonner";
import { Copy, RefreshCcw, Share2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function PassGenClientComponent() {
  const [passwordLength, setPasswordLength] = useState(14);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPasswordResult, setGeneratedPasswordResult] = useState("");
  const { copyText } = useClipboard();
  const { shareLink } = useShare();

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
    setGeneratedPasswordResult(password);
  };

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeSpecialChars]);

  return (
    <>
      <div className="grid gap-4">
        <div className="grid gap-2 md:flex">
          <section className="flex w-full justify-end">
            <Input className="text-2xl" readOnly value={generatedPasswordResult} placeholder="" />
            <div className="flex gap-1 absolute">
              <ActionButton
                variant="outline"
                size="icon"
                onClick={() => {
                  copyText(generatedPasswordResult);
                }}
                disabled={!generatedPasswordResult.trim()}>
                <Copy />
              </ActionButton>
              <ActionButton
                variant="outline"
                size="icon"
                onClick={() => {
                  shareLink(generatedPasswordResult);
                }}>
                <Share2 />
              </ActionButton>
            </div>
          </section>
          <div>
            <ActionButton
              className="w-full"
              TextAction="Generar Nueva Contraseña"
              onClick={() => generatePassword()}>
              <RefreshCcw className="ml-2" />
            </ActionButton>
          </div>
        </div>
        <section className="grid gap-2">
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="text-left space-y-0.5">
              <h1>Incluir Simbolos</h1>
              <p className="text-xs text-muted-foreground">
                {`Símbolos a usar aleatorios: !@#$%^&*()_+{}:"<>?[];,./~`}
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
                <h1>Longitud de la contraseña</h1>
                <p className="text-xs text-muted-foreground">
                  Una longitud mayor significa una seguridad más robusta.
                </p>
              </div>
              <div>
                <Badge className="text-lg">{passwordLength}</Badge>
              </div>
            </div>
            <div>
              <Slider
                defaultValue={[14]}
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
    </>
  );
}
5;
