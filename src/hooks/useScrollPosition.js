import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = throttle(() => {
      setScrollPosition(window.scrollY);
    }, 50);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};