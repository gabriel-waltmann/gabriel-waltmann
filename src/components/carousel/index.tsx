import { CaretLeft, CaretRight, ImageBroken } from "@phosphor-icons/react";
import { CSSProperties, useEffect, useState } from "react";
import TypographySubtitle from "@/components/typography/subtitle";
import TypographyParagraph from "@/components/typography/paragraph";

const urStyle: CSSProperties = {
  overflowX: "hidden",
  position: "relative",
  height: "400px",
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  backgroundColor: "#8e8e8e",
};

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

const articleStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  padding: "1rem",
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

type TProps = Readonly<{
  slides: ICarouselSlide[];
  autoPlay?: boolean;
  name: string;
  description?: string;
}>;

export default function Carousel(props: TProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const getLiStyle = () => ({
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentSlide * 100}%)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  });

  return (
    <ul style={urStyle}>
      {props.slides.map((slide, slideIndex) => (
        <li key={slideIndex + "slide"} style={getLiStyle()}>
          <img src={slide.url} height="400px" alt={slide.name} />
        </li>
      ))}

      {!props.slides.length && (
        <li style={getLiStyle()}>
          <ImageBroken style={iconStyle} size={64} />
        </li>
      )}

      <article style={articleStyle}>
        <TypographySubtitle value={props.name} />

        <TypographyParagraph value={props.description} />
      </article>

      {props.slides.length > 1 && (
        <nav style={navStyle}>
          <button onClick={prevSlide}>
            <CaretLeft size={32} />
          </button>

          <button onClick={nextSlide}>
            <CaretRight size={32} />
          </button>
        </nav>
      )}
    </ul>
  );
}
