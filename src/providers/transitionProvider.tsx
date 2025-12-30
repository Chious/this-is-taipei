import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TransitionProvider({
  children,
  locationKey,
}: {
  children: React.ReactNode;
  locationKey: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Fade in animation
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0.8,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );

      return () => {
        gsap.killTweensOf(containerRef.current);
      };
    },
    { scope: containerRef, dependencies: [locationKey] }
  );

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
}
