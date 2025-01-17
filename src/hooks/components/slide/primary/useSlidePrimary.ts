import { useScreen } from "@/hooks/useScreen";
import { CSSProperties, useEffect, useState } from "react";

const navStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translateY(-50%)",
  zIndex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

const iconStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#121212",
};

export interface ICarouselSlide {
  url: string;
  name: string;
}

export type TSlidePrimaryProps = Readonly<{
  slides: ICarouselSlide[];
  autoPlay?: boolean;
  name: string;
  description?: string;
}>;

export function useSlidePrimary(props: TSlidePrimaryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isMobile } = useScreen();

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? props.slides.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === props.slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (props.autoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  const getListStyle = () => ({
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentSlide * 100}%)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  });

  const ulStyle: CSSProperties = {
    overflowX: "hidden",
    position: "relative",
    height: isMobile ? "240px" : "400px",
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    backgroundColor: "#8e8e8e",
  };

  const articleStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: isMobile ? "0.5rem" : "1rem",
  };

  return {
    currentSlide,
    prevSlide,
    nextSlide,
    getListStyle,
    ulStyle,
    navStyle,
    articleStyle,
    iconStyle,
  };
}
