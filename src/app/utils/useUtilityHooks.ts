import { toast } from "sonner";
import { posthog } from "posthog-js";

export const useClipboard = () => {
  const copyText = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        posthog.capture("Enlace Copiado", {
          element: "Utilidades",
          text_length: copyText.length
        });
        toast.success("Enlace Copiado");
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
        toast.error("Erro al copiar texto");
      });
  };
  return { copyText };
};

export const useShare = () => {
  const shareLink = (text?: string): void => {
    if (navigator.share) {
      navigator
        .share({
          text: text
        })
        .then(() => {
          toast.success("Enlace Compartido");
        })
        .catch((err) => {
          console.error("Error al compartir: ", err);
          toast.error("Error al compartir");
        });
    } else {
      toast.error("La función compartir no está soportada en este navegador.");
    }
  };

  return { shareLink };
};
