import { useEffect, useRef, useState } from 'react';

import type { LottiePlayer } from 'lottie-web';

export const TestAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: '/animation/exchange/data.json',
      });

      return () => animation.destroy();
    }
    return () => {};
  }, [lottie]);

  return <div ref={ref} />;
};
