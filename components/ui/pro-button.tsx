import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const proButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
        outline:
          "border border-input bg-background hover:bg-accent-hover hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
      borderGradient: {
        default: "",
        gradient: "border-gradient",
        animated: "border-gradient-animated",
        grayscale: "border-gradient-grayscale",
        grayscaleAnimated: "border-gradient-grayscale-animated",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      borderGradient: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof proButtonVariants> {
  asChild?: boolean;
}

const ProButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, borderGradient, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          proButtonVariants({ variant, size, borderGradient, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
ProButton.displayName = "ProButton";

export { ProButton, proButtonVariants };
