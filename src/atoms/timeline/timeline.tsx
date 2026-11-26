import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { timelineMarkerVariants } from "./timeline.variants";

export type TimelineItem = {
  title: ReactNode;
  description?: ReactNode;
  /** Timestamp or date label. */
  time?: ReactNode;
  /** Icon inside a larger marker; omit for a small dot. */
  icon?: ReactNode;
  tone?: VariantProps<typeof timelineMarkerVariants>["tone"];
  /** Extra content under the description (e.g. attachments, buttons). */
  content?: ReactNode;
  key?: string;
};

export type TimelineProps = Omit<HTMLAttributes<HTMLOListElement>, "children"> & {
  items: TimelineItem[];
  /** Where the time shows: under the title, or in a column on the left. */
  timePosition?: "inline" | "left";
  /** Draws the connector to the last item dashed (e.g. "in progress"). */
  pending?: boolean;
  "data-testid"?: string;
};

/** Vertical list of events, e.g. order history or an activity log. */
export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  ({ items, timePosition = "inline", pending, className, "data-testid": testId, ...props }, ref) => (
    <ol ref={ref} className={cn("font-sans", className)} data-testid={testId ?? "timeline"} {...props}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const hasIcon = !!item.icon;
        return (
          <li key={item.key ?? index} className="flex gap-3" data-testid={`timeline-item-${index}`}>
            {timePosition === "left" && (
              <span className="w-24 shrink-0 pt-1 text-right text-caption text-foreground-muted">{item.time}</span>
            )}
            <span className="flex w-7 flex-col items-center">
              <span className={timelineMarkerVariants({ tone: item.tone, hasIcon })}>
                {hasIcon && <span className="inline-flex h-3.5 w-3.5 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5">{item.icon}</span>}
              </span>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "-my-0.5 w-px flex-1",
                    pending && index === items.length - 2 ? "border-l border-dashed border-border-strong" : "bg-border-strong"
                  )}
                />
              )}
            </span>
            <div className={cn("min-w-0 flex-1", !isLast && "pb-6", hasIcon && "pt-0.5")}>
              <p className="text-body-sm font-medium text-foreground">{item.title}</p>
              {timePosition === "inline" && item.time && <p className="text-caption text-foreground-muted">{item.time}</p>}
              {item.description && <p className="mt-1 text-body-sm text-foreground-muted">{item.description}</p>}
              {item.content && <div className="mt-2">{item.content}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  )
);
Timeline.displayName = "Timeline";
