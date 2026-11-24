import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "../../lib/cn";
import { iconVariants } from "./icon.variants";

export type IconProps = Omit<LucideProps, "size" | "ref"> &
  VariantProps<typeof iconVariants> & {
    /** Any lucide-react icon, e.g. `import { Search } from "lucide-react"`. */
    icon: LucideIcon;
    /** Accessible name. Omit for decorative icons (they're hidden from screen readers). */
    label?: string;
    "data-testid"?: string;
  };

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size, tone, label, className, "data-testid": testId, ...props }, ref) => (
    <IconComponent
      ref={ref}
      className={cn(iconVariants({ size, tone }), className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
      data-testid={testId ?? "icon"}
      {...props}
    />
  )
);
Icon.displayName = "Icon";
