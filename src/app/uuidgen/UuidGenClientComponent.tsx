"use client";

import React, { useState } from "react";
import { useClipboard, useShare } from "../utils/useUtilityHooks";
import { v4 as uuidv4 } from "uuid";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";

import { Copy, RefreshCcw, Share2 } from "lucide-react";

export default function UuidGenClientComponent() {
  const [uuid, setUuid] = useState(uuidv4());
  const { copyText } = useClipboard();
  const { shareLink } = useShare();

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  return (
    <>
      <div className="grid gap-4">
        <section className="flex w-full justify-end">
          <Input className="text-2xl" readOnly value={uuid} />
          <div className="flex gap-1 absolute">
            <ActionButton
              variant="outline"
              size="icon"
              onClick={() => {
                copyText(uuid);
              }}>
              <Copy />
            </ActionButton>
            <ActionButton
              variant="outline"
              size="icon"
              onClick={() => {
                shareLink(uuid);
              }}
              disabled={!uuid.trim()}>
              <Share2 />
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
