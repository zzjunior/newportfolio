import { useEffect, useState } from 'react';

const useBottomDetector = (threshold = 100) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const distanceToBottom = documentHeight - (scrollTop + windowHeight);

      setReachedBottom(distanceToBottom < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return reachedBottom;
};

export default useBottomDetector;
