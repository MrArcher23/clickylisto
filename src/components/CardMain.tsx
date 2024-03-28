import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  onClick?: () => void;
  titleText: string;
  subtitleText: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  imageCard: StaticImport;
}

export const CardMain: React.FC<Props> = ({ onClick, titleText, subtitleText, imageCard }) => {
  return (
    <Card className="w-80 flex content-center justify-center m-2" onClick={onClick}>
      <div className="w-1/3 justify-center content-center ml-2">
        <Image src={imageCard} alt="fotito" />
      </div>
      <div>
        <CardHeader className="">
          <CardTitle>{titleText}</CardTitle>
          <CardDescription>{subtitleText}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end">
          <Button variant="outline" size="icon" onClick={onClick}>
            <ChevronRight />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
