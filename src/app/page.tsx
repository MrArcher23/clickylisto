import React from "react";
import upperTolow from "@assets/images/upperTolow.svg";
import qrTool from "@assets/images/QrTool.svg";
import iconWs from "@assets/images/whatsapp.svg";
import imageTool from "@assets/images/image-tool.svg";
import passGen from "@assets/images/password.svg";
import uuidCode from "@assets/images/binary-code.svg";
import shortLink from "@assets/images/link.svg";
import { CardMain } from "@/components/CardMain";
import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center">
      <div className="mb-8">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Click y Listo
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          <span className="font-bold">Herramientas prácticas al alcance de un clic</span> .
        </p>
      </div>
      <section className="flex-wrap gap-4 md:flex lg:flex xl:flex">
        <Link href={"/texttools"} prefetch>
          <CardMain
            imageCard={upperTolow}
            titleText="Mayúsculas a minúsculas"
            subtitleText="Convierte tu texto"
          />
        </Link>

        <Link href={"/qrtools"} prefetch>
          <CardMain
            imageCard={qrTool}
            titleText="Generador de códigos QR"
            subtitleText="QR en segundos"
          />
        </Link>

        <Link href={"/linktows"} prefetch>
          <CardMain
            imageCard={iconWs}
            titleText="Genera tu enlace a WhatsApp"
            subtitleText="Enlace personalizado"
          />
        </Link>

        <Link href={"/passwordgen"} prefetch>
          <CardMain
            imageCard={passGen}
            titleText="Contraseñas seguras"
            subtitleText="Genere contraseñas seguras"
          />
        </Link>
        <Link href={"/uuidgen"} prefetch>
          <CardMain
            imageCard={uuidCode}
            titleText="Genera UUID  "
            subtitleText="Universally Unique Identifiers"
          />
        </Link>
        <Link href={"/image-tool"} prefetch>
          <CardMain
            imageCard={imageTool}
            titleText="Optimizacion de imagen"
            subtitleText="Optimiza JPG, PNG, etc."
          />
        </Link>
        <Link href={"/shortlink"} prefetch>
          <CardMain
            imageCard={shortLink}
            titleText="Acortador de enlaces"
            subtitleText="Acorta tu URL"
          />
        </Link>

        {/* <CardMain
          imageCard={upperTolow}
          titleText="Acortador de Enlaces"
          subtitleText="Convierte tu texto"
          onClick={() => router.push("./shortlink")}
        /> */}
      </section>
    </main>
  );
}
