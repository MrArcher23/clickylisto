"use client";

import React, { useState } from "react";
import { Copy, Eraser, ChevronRight } from "lucide-react";
import { toast } from "sonner";

import { ActionButton } from "@/components/ActionButton";
import { TextArea } from "@/components/TextArea";
import posthog from "posthog-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QrTools() {
  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Acortador de Enlaces
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Optimiza tu texto:{" "}
          <span className="font-bold">convierte textos a mayúsculas o minúsculas, </span>
          capitaliza palabras y ajusta después de puntos.
        </p>
      </div>
      <section className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5"></section>
    </main>
  );
}
