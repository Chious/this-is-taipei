import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import * as React from "react";

export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_DOWN: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: "easeOut",
      },
    },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          <motion.span variants={FADE_DOWN}>{child}</motion.span>
        )
      )}
    </motion.div>
  );
}
