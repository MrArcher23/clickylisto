'use client';

import React, { useState } from 'react';
import { Copy, Eraser } from 'lucide-react';
import { toast } from 'sonner';

import { ActionButton } from '@/components/ActionButton/ActionButton';
import { TextArea } from '@/components/TextArea/TextArea';

export default function Home() {
  const [texto, setTexto] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexto(event.target.value);
  };

  const [buttonActive, setbuttonActive] = useState(false);

  const observerButton = (conversion: () => void) => {
    conversion();
    setbuttonActive(texto.trim() !== '');
  };

  const copyText = () => {
    navigator.clipboard.writeText(texto);
  };

  const clearText = () => {
    setTexto('');
  };

  const textToUpper = () => {
    setTexto(texto.toLocaleUpperCase());
  };

  const textToLower = () => {
    setTexto(texto.toLocaleLowerCase());
  };

  const textToCapitalize = () => {
    setTexto(
      texto.toLowerCase().replace(/\b(\w)/g, (letra) => letra.toUpperCase()),
    );
  };

  const textToDot = () => {
    setTexto(
      texto.replace(
        /(^\s*|\.\s*)([a-z])/g,
        (match, espacioPunto, letra) => espacioPunto + letra.toUpperCase(),
      ),
    );
  };
  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Mayúsculas a Minúsculas
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Optimiza tu texto:{' '}
          <span className="font-bold">
            convierte textos a mayúsculas o minúsculas,{' '}
          </span>
          capitaliza palabras y ajusta después de puntos.
        </p>
      </div>
      <section className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5">
        <div className="flex justify-end gap-4 rounded-lg pb-2">
          <ActionButton
            variant="outline"
            size="icon"
            TextAction=""
            onClick={() => {
              clearText();
              toast.success('Texto Borrado');
            }}
            disabled={!buttonActive || texto.trim() === ''}
          >
            <Eraser />
          </ActionButton>
          <ActionButton
            variant="outline"
            size="icon"
            TextAction=""
            onClick={() => {
              copyText();
              toast.success('Texto Copiado');
            }}
            disabled={!buttonActive || texto.trim() === ''}
          >
            <Copy />
          </ActionButton>
        </div>
        <TextArea
          placeholder="Pega o escribe tu texto aquí"
          texto={texto}
          handleChange={handleChange}
        />
      </section>
      <section className="mt-2 grid w-full gap-4 md:w-3/5 lg:w-3/5 lg:grid-cols-2 xl:w-3/5 mb-12">
        <ActionButton
          TextAction="Convertir a MAYÚSCULAS"
          onClick={() => observerButton(textToUpper)}
        />
        <ActionButton
          TextAction="Convertir a minúsculas"
          onClick={() => observerButton(textToLower)}
        />
        <ActionButton
          TextAction="Capitalizar Texto"
          onClick={() => observerButton(textToCapitalize)}
        />
        <ActionButton
          TextAction="MAYÚSCULAS después de punto"
          onClick={() => observerButton(textToDot)}
        />
      </section>
    </main>
  );
}
