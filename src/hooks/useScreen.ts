import { useState, useEffect } from "react";

export function useScreen() {
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (typeof window === "undefined") return;

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", () => handleResize());

    return () => window.removeEventListener("resize", () => handleResize());
  }, []);

  return {
    width,
    height,
    isMobile,
  };
}
