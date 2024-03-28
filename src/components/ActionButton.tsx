import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";

interface Props {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  TextAction: string;
  disabled?: boolean;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

export const ActionButton: React.FC<Props> = ({
  onClick,
  className,
  TextAction,
  disabled,
  variant,
  size,
  children
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}>
      {TextAction} {children}
    </Button>
  );
};
