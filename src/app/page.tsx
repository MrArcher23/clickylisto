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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ClickyListo",
            "url": "https://clickylisto.com",
            "description": "Herramientas online gratuitas: generador de QR, convertidor de texto, generador de contraseñas, UUID, enlaces de WhatsApp, acortador de links y optimizador de imágenes.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Convertidor de texto (mayúsculas/minúsculas)",
              "Generador de códigos QR",
              "Generador de contraseñas seguras",
              "Generador de UUID",
              "Generador de enlaces de WhatsApp",
              "Acortador de enlaces",
              "Optimizador de imágenes"
            ],
            "inLanguage": "es-ES"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ClickyListo",
            "url": "https://clickylisto.com",
            "logo": "https://clickylisto.com/og-image.png",
            "description": "Herramientas prácticas online gratuitas al alcance de un clic",
            "sameAs": []
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Convertidor de Texto",
                "url": "https://clickylisto.com/texttools"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Generador de Códigos QR",
                "url": "https://clickylisto.com/qrtools"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Generador de Enlaces WhatsApp",
                "url": "https://clickylisto.com/linktows"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Generador de Contraseñas",
                "url": "https://clickylisto.com/passwordgen"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Generador de UUID",
                "url": "https://clickylisto.com/uuidgen"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Optimizador de Imágenes",
                "url": "https://clickylisto.com/image-tool"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "Acortador de Enlaces",
                "url": "https://clickylisto.com/shortlink"
              }
            ]
          })
        }}
      />
    </main>
  );
}
