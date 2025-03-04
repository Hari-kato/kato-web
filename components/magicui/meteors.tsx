"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps extends React.HTMLAttributes<HTMLSpanElement> {
  number?: number;
  gradientColor?: string; // Added prop
}

export const Meteors = ({ number = 20, gradientColor = "white", ...props }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
          {...props}
        >
          {/* Meteor Tail */}
          <div
            className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradientColor}, transparent)`, // Use the prop
            }}
          />
        </span>
      ))}
    </>
  );
};
