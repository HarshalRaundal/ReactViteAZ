import { useCallback, useEffect, useState } from "react";

export const useCaraousel = (length, delay = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  const goTo = useCallback((ind) => {
    setCurrentIndex(ind);
  }, []);
  return { currentIndex, goTo };
};
