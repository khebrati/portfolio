"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export default function CountUp({ end, suffix = "", label, decimals = 0 }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const springValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(springValue, (v) => `${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      springValue.set(end);
    }
  }, [isInView, end, springValue]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="block font-display text-5xl md:text-6xl font-bold tracking-tight text-text">
        {displayValue}
      </motion.span>
      <span className="mt-2 block text-xs uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );
}
