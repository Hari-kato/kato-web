import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  title,
  subtitle,
  containerClassName,
  dottedColor,
  hoverColor,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string[];
  subtitle?: string;
  containerClassName?: string;
  dottedColor?: string;
  hoverColor?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-[23rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn("absolute inset-0  pointer-events-none", dottedColor)}
      />
      <motion.div
        className={cn(
          "pointer-events-none  absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
          hoverColor
        )}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      {(title || subtitle) && (
        <div className="absolute z-20 text-center">
          {title && <h1 className="text-3xl font-bold text-white">{title}</h1>}
          {subtitle && <p className="text-lg text-white mt-2">{subtitle}</p>}
        </div>
      )}

      {/* Render children only if provided */}
      {children && (
        <div className={cn("relative z-20", className)}>{children}</div>
      )}
    </div>
  );
};
