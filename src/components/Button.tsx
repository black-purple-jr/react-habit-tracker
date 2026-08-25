import type { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge';

type Variant = "primary" | "secondary" | "ghost-destructive";
type ButtonProps = { variant?: Variant } & ComponentProps<"button">;

export default function Button({ variant = "primary", className, ...props }: ButtonProps): React.ReactNode {

  function getVariantStyles(variant: Variant) {
    switch (variant) {
      case "primary":
        return "bg-violet-600 hover:bg-violet-500";
      case "secondary":
        return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
      case "ghost-destructive":
        return "text-red-800 bg-zinc-800 hover:text-red-200 hover:bg-red-800"
      default:
        throw new Error(`Invalid variant: ${variant}`);
    }
  }

  return (
    <button
      {...props}
      
      className={twMerge(
        getVariantStyles(variant),
        "transition-colors rounded px-3 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        className
      )}
    />
  )
}