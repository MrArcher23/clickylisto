"use client";

import React, { useState } from "react";
import processImage from "./imageActions";
import { ActionButton } from "@/components/ActionButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const formatToExtension = (format: string): string => {
  switch (format) {
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    default:
      return "jpg";
  }
};

const generateFileName = (
  format: string,
  width: string,
  height: string,
  quality: string
): string => {
  const extension = formatToExtension(format);
  const timestamp = new Date().getTime();
  const dimensions = width && height ? `-${width}x${height}` : "";
  const qualitySuffix = quality ? `-q${quality}` : "";

  return `processed-image${dimensions}${qualitySuffix}-${timestamp}.${extension}`;
};

const fitOptions = [
  { value: "cover", label: "Cover: Llena el espacio, puede recortar la imagen" },
  { value: "contain", label: "Contain: Muestra toda la imagen, puede dejar espacio vacío" },
  { value: "fill", label: "Fill: Llena el espacio, distorsiona la imagen si es necesario" },
  {
    value: "inside",
    label: "Inside: Escala la imagen para que quepa dentro del espacio, sin recortar"
  },
  { value: "outside", label: "Outside: Escala la imagen para cubrir el espacio, puede recortar" }
];

const imageFormatOptions = [
  { value: "-", label: "Original" },
  { value: "image/png", label: "PNG" },
  { value: "image/webp", label: "WebP" }
];

export default function ImageUploadForm() {
  const [useURL, setUseURL] = useState(true);
  const [imageFormat, setImageFormat] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [quality, setQuality] = useState("");
  const [fit, setFit] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!useURL) {
      formData.set("url", "");
    }

    formData.append("format", imageFormat);
    formData.append("width", imageWidth);
    formData.append("height", imageHeight);
    formData.append("quality", quality);
    formData.append("fit", fit);

    const result = await processImage(formData);
    if (!result.errors) {
      const imageBase64 = result.image;
      const contentType = result.contentType;
      const blob = await (await fetch(`data:${contentType};base64,${imageBase64}`)).blob();

      const url = window.URL.createObjectURL(blob);
      const fileName = generateFileName(imageFormat, imageWidth, imageHeight, quality);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      // Limpieza
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      alert(result.errors);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex justify-center mb-4">
          <ActionButton
            className={`px-4 py-2 rounded ${useURL ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            variant="outline"
            TextAction="Usar URL"
            onClick={() => setUseURL(true)}></ActionButton>
          <ActionButton
            className={`px-4 py-2 rounded ${!useURL ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            variant="outline"
            TextAction="Subir Imagen"
            onClick={() => setUseURL(false)}></ActionButton>
        </div>
        {useURL ? (
          <Input
            type="text"
            name="url"
            placeholder="URL de la imagen"
            className="input url-input w-full px-4 py-2 border rounded mb-4"
            required={useURL}
          />
        ) : (
          <Input
            type="file"
            name="image"
            accept="image/*"
            className="file-input w-full px-4 py-2 border rounded mb-4"
            required={!useURL}
          />
        )}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Formato deseado:</label>
            <Select
              name="format"
              value={imageFormat}
              onValueChange={(value) => setImageFormat(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {imageFormatOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-2">Calidad:</label>
            <Input
              type="text"
              name="quality"
              placeholder="% (opcional)"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="input w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            type="text"
            name="width"
            placeholder="Ancho (opcional)"
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
            className="input w-full px-4 py-2 border rounded"
          />
          <Input
            type="text"
            name="height"
            placeholder="Alto (opcional)"
            value={imageHeight}
            onChange={(e) => setImageHeight(e.target.value)}
            className="input w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-8">
          <label className="block">Ajuste de la imagen:</label>
          <Select name="fit" value={fit} onValueChange={(value) => setFit(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fitOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 mt-2">
            Elija cómo desea que la imagen se ajuste a las dimensiones proporcionadas.
          </p>
        </div>
        <ActionButton type="submit" TextAction="Procesar Imagen" />
      </form>
    </div>
  );
}
