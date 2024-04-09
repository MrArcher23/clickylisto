"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";

import posthog from "posthog-js";
import { toast } from "sonner";
import { Copy, RefreshCcw } from "lucide-react";

export default function UuidGenClientComponent() {
  const [uuid, setUuid] = useState(uuidv4());

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  const copyUuid = () => {
    const textToCopy = uuid;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        posthog.capture("UUID Copiado", {
          element: "Utilidades_seguridad",
          text_length: textToCopy.length
        });
      })
      .catch((err) => {
        console.error("Error al copiar el uuid: ", err);
      });
    toast.success("UUID Copiado");
  };

  return (
    <>
      <div className="grid gap-4">
        <section className="flex w-full justify-end">
          <Input className="text-2xl" readOnly value={uuid} />
          <div className="flex gap-1 absolute">
            <ActionButton
              className=""
              variant="outline"
              size="icon"
              TextAction=""
              onClick={() => {
                copyUuid();
              }}>
              <Copy />
            </ActionButton>
          </div>
        </section>
        <div>
          <ActionButton
            className="w-full"
            TextAction="Generar Nuevo UUID V4"
            onClick={() => generateUuid()}>
            <RefreshCcw className="ml-2" />
          </ActionButton>
        </div>
      </div>
    </>
  );
}
5;
