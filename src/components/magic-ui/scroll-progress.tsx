'use client';

import { motion, useScroll, useSpring } from 'motion/react';

import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-700',
        className,
      )}
      style={{
        scaleX,
      }}
    />
  );
}
