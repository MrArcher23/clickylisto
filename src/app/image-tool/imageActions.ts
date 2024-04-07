"use server";

import { z } from "zod";
import Image from "@lib/Image";

interface ProcessImageResult {
  image?: string;
  contentType?: string;
  errors?: string;
}

const schema = z
  .object({
    url: z.string().optional(),
    image: z.any().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
    format: z.string().optional(),
    quality: z.number().optional(),
    fit: z.enum(["fill", "cover", "contain", "inside", "outside"]).optional()
  })
  .refine((data) => data.url || data.image, {
    message: "Either URL or Image must be provided."
  });

export default async function processImage(formData: FormData): Promise<ProcessImageResult> {
  const validatedFields = schema.safeParse({
    url: formData.get("url"),
    image: formData.get("image"),
    format: formData.get("format"),
    width: formData.get("width"),
    height: formData.get("height"),
    quality: formData.get("quality") ? Number(formData.get("quality")) : 90,
    fit: formData.get("fit")
  });

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(", ");
    console.log("Errors: ", errorMessages);

    return {
      errors: errorMessages
    };
  }

  const { url, image, width, height, format, quality, fit } = validatedFields.data;

  let imageInstance: Image;

  if (url) {
    imageInstance = new Image(url);
  } else if (image) {
    const arrayBuffer = await image.arrayBuffer();
    imageInstance = new Image(arrayBuffer);
  } else {
    return { errors: "No image or URL provided" };
  }

  await imageInstance.initialize();
  imageInstance.resizeByQuery({
    width,
    height,
    fit: fit ?? "cover"
  });

  await imageInstance.convertFormatByAccept(format ?? "", {
    quality: quality ?? null,
    lossless: true
  });

  const buffer = await imageInstance.buffer();
  const imageBase64 = buffer!.toString("base64");
  const conentType = imageInstance.getContentType();

  return { image: imageBase64, contentType: conentType };
}
