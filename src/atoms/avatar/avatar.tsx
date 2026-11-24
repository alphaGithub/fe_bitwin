"use client";

import { forwardRef, useEffect, useState } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { avatarStatusVariants, avatarVariants } from "./avatar.variants";

export type AvatarProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    /** Person's name — used for alt text and to build initials if the image is missing. */
    name?: string;
    status?: VariantProps<typeof avatarStatusVariants>["status"];
    "data-testid"?: string;
  };

/** "Amit Kumar Shah" → "AS", "amit" → "A". */
export function getInitials(name?: string): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, name, size, shape, tone, status, className, "data-testid": testId, ...props }, ref) => {
    const [failed, setFailed] = useState(false);
    useEffect(() => setFailed(false), [src]);
    const showImage = src && !failed;

    return (
      <span
        ref={ref}
        role="img"
        aria-label={name ?? "Avatar"}
        className={cn(avatarVariants({ size, shape, tone }), status && "overflow-visible", className)}
        data-testid={testId ?? "avatar"}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt=""
            onError={() => setFailed(true)}
            className={cn("h-full w-full object-cover", shape === "square" ? "rounded-md" : "rounded-full")}
          />
        ) : (
          <span aria-hidden="true">{getInitials(name)}</span>
        )}
        {status && <span aria-hidden="true" className={avatarStatusVariants({ status, size })} />}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";
