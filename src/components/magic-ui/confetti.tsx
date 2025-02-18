'use client';

import { useEffect, useState } from 'react';

import confetti from 'canvas-confetti';

import useBottomDetector from '@/hooks/use-bottom-detector';

export function Confetti() {
  const onBottom = useBottomDetector();
  const [hasShownConfetti, setHasShownConfetti] = useState(false);

  function handleConfetti() {
    const end = Date.now() + 3 * 1000;
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.75 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.75 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }

  useEffect(() => {
    if (onBottom && !hasShownConfetti) {
      handleConfetti();
      setHasShownConfetti(true);
    }
  }, [onBottom, hasShownConfetti]);

  return <></>;
}
