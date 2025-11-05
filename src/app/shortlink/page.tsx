import React from "react";
import { HeaderPage } from "@/components/HeaderPage";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acortador de Enlaces Gratis - ClickyListo",
  description:
    "Simplifica tus enlaces con nuestro acortador de enlaces gratuito. Ideal para compartir enlaces de manera más eficiente y segura. Acorta tus URLs largas en un solo clic y comparte fácilmente en redes sociales, correos electrónicos y otros medios.",
  keywords: [
    "acortador de enlaces",
    "acortar URL",
    "URL shortener",
    "acortador de links",
    "acortar link",
    "short link",
    "reducir URL"
  ],
  openGraph: {
    title: "Acortador de Enlaces Gratis - ClickyListo",
    description: "Acorta tus URLs largas en un solo clic y comparte fácilmente en redes sociales.",
    url: "https://clickylisto.com/shortlink",
    type: "website",
    images: [
      {
        url: "/og-shortlink.png",
        width: 1200,
        height: 630,
        alt: "Acortador de Enlaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acortador de Enlaces Gratis",
    description: "Acorta tus URLs largas en un solo clic con ClickyListo.",
    images: ["/twitter-shortlink.png"],
  },
  alternates: {
    canonical: "https://clickylisto.com/shortlink",
  },
};
const UuidGenClientComponent = dynamic(() => import("./ShortLinkClientComponent"), { ssr: false });

export default function ShortLinkGenerator() {
  return (
    <HeaderPage
      titleText="Acortador de Enlaces"
      subTitleOne="Acorta tus URLs largas en"
      subTitleBold="un solo clic"
      subTitleTwo="y comparte tus enlaces fácilmente.">
      <UuidGenClientComponent />
    </HeaderPage>
  );
}
