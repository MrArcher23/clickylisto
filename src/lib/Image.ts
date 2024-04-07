import axios from "axios";
import sharp, { Sharp } from "sharp";

const QUALITY = 90;
const FIT = "cover";
const ORIGIN_WHITELIST: string[] = [];
const AVIF_MAX_MP = 5;

export interface ResizeParams {
  width?: string;
  height?: string;
  fit?: "cover" | "contain" | "fill" | "inside" | "outside";
}

export interface OperationParams {
  blur?: number;
  sharpen?: number;
  flip?: boolean;
  flop?: boolean;
  rotate?: number;
  background?: string;
}

class Image {
  private source: string | ArrayBuffer;
  private sharpInstance: Sharp | undefined;
  public type: string | undefined;
  public data: Buffer | undefined;
  public width: number | undefined;
  public height: number | undefined;

  constructor(source: string | ArrayBuffer) {
    this.source = source;
  }

  async initialize(): Promise<void> {
    if (typeof this.source === "string") {
      const urlDomain = new URL(this.source).hostname;
      if (ORIGIN_WHITELIST.length > 0 && !ORIGIN_WHITELIST.includes(urlDomain)) {
        throw new Error("Origin not allowed");
      }

      const response = await axios.get(this.source, {
        responseType: "arraybuffer",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Upgrade-Insecure-Requests": "1"
        }
      });
      this.data = Buffer.from(response.data);
    } else {
      this.data = Buffer.from(this.source);
    }

    this.sharpInstance = sharp(this.data);
    const metadata = await this.sharpInstance.metadata();
    this.width = metadata.width;
    this.height = metadata.height;
    this.type = metadata.format;
  }

  async resizeByQuery(params: ResizeParams): Promise<void> {
    if (!this.sharpInstance) throw new Error("Sharp instance hasn't been initialized.");

    const resizeOptions = {
      width: params.width ? parseInt(params.width, 10) : this.width,
      height: params.height ? parseInt(params.height, 10) : this.height,
      fit: params.fit || FIT,
      withoutEnlargement: true
    };
    this.sharpInstance = this.sharpInstance.resize(resizeOptions);
  }

  async performOperationsByQuery(params: OperationParams): Promise<void> {
    if (!this.sharpInstance) {
      throw new Error("Sharp instance hasn't been initialized.");
    }

    if (params.blur && params.blur > 0 && Number(params.blur) <= 100) {
      this.sharpInstance?.blur(params.blur);
    }
    if (params.sharpen && params.sharpen > 1 && params.sharpen <= 100) {
      this.sharpInstance?.sharpen(params.sharpen);
    }
    if (params.flip) {
      this.sharpInstance?.flip();
    }
    if (params.flop) {
      this.sharpInstance?.flop();
    }
    if (params.rotate) {
      this.sharpInstance?.rotate(params.rotate, {
        background: (params.background as string) || undefined
      });
    }
  }

  async convertFormatByAccept(acceptHeader: string, params: any): Promise<void> {
    if (!this.sharpInstance) throw new Error("Sharp instance hasn't been initialized.");
    const formatOptions = {
      quality: params?.quality ?? QUALITY,
      lossless: params?.lossless ?? false
    };

    if (acceptHeader.includes("image/avif") && this.isSizeWithinLimit()) {
      this.sharpInstance = this.sharpInstance.avif(formatOptions);
      this.type = "avif";
    } else if (acceptHeader.includes("image/webp")) {
      this.sharpInstance = this.sharpInstance.webp(formatOptions);
      this.type = "webp";
    } else if (acceptHeader.includes("image/png")) {
      this.sharpInstance = this.sharpInstance.png(formatOptions);
      this.type = "png";
    } else {
      this.sharpInstance = this.sharpInstance.jpeg({
        // mozjpeg: true,
        ...formatOptions
      });
    }
  }

  isSizeWithinLimit(): boolean {
    const imageSizeInMP = ((this.width || 0) * (this.height || 0)) / 1000000;
    return imageSizeInMP <= AVIF_MAX_MP;
  }

  getContentType(): string {
    return `image/${this.type}`;
  }

  getResponseHeaders(): Record<string, string> {
    return {
      "Content-Type": `image/${this.type}`,
      "Content-Length": this.data?.length.toString() ?? "0",
      "Cache-Control": "public, max-age=31536000",
      Expires: new Date(Date.now() + 31536000 * 1000).toUTCString(),
      "Last-Modified": new Date().toUTCString(),
      Pragma: "public",
      "X-Powered-By": "Image API"
    };
  }

  async buffer(): Promise<Buffer | undefined> {
    return this.sharpInstance?.toBuffer();
  }
}

export default Image;
