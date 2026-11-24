import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-sans font-medium",
  {
    variants: {
      tone: {
        neutral: "",
        primary: "",
        success: "",
        warning: "",
        error: "",
        info: "",
      },
      appearance: {
        soft: "border-transparent",
        solid: "border-transparent text-white",
        outline: "bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-caption",
        md: "px-2.5 py-0.5 text-body-sm",
      },
    },
    compoundVariants: [
      { tone: "neutral", appearance: "soft", class: "bg-grey-100 text-grey-700" },
      { tone: "primary", appearance: "soft", class: "bg-primary-50 text-primary-700" },
      { tone: "success", appearance: "soft", class: "bg-success-50 text-success-700" },
      { tone: "warning", appearance: "soft", class: "bg-warning-50 text-warning-700" },
      { tone: "error", appearance: "soft", class: "bg-error-50 text-error-700" },
      { tone: "info", appearance: "soft", class: "bg-info-50 text-info-700" },

      { tone: "neutral", appearance: "solid", class: "bg-grey-600" },
      { tone: "primary", appearance: "solid", class: "bg-primary-600" },
      { tone: "success", appearance: "solid", class: "bg-success-600" },
      { tone: "warning", appearance: "solid", class: "bg-warning-600" },
      { tone: "error", appearance: "solid", class: "bg-error-600" },
      { tone: "info", appearance: "solid", class: "bg-info-600" },

      { tone: "neutral", appearance: "outline", class: "border-grey-300 text-grey-700" },
      { tone: "primary", appearance: "outline", class: "border-primary-500 text-primary-700" },
      { tone: "success", appearance: "outline", class: "border-success-500 text-success-700" },
      { tone: "warning", appearance: "outline", class: "border-warning-500 text-warning-700" },
      { tone: "error", appearance: "outline", class: "border-error-500 text-error-700" },
      { tone: "info", appearance: "outline", class: "border-info-500 text-info-700" },
    ],
    defaultVariants: { tone: "neutral", appearance: "soft", size: "sm" },
  }
);

export const badgeDotVariants = cva("h-1.5 w-1.5 rounded-full bg-current");
