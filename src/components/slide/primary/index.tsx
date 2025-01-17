import { CaretLeft, CaretRight, ImageBroken } from "@phosphor-icons/react";
import TypographyParagraph from "@/components/typography/paragraph";
import TypographyCaption from "@/components/typography/caption";
import { useSlidePrimary, TSlidePrimaryProps } from "@/hooks/components/slide/primary/useSlidePrimary";

export default function SlidePrimary(props: TSlidePrimaryProps): JSX.Element {
  const {
    ulStyle,
    getListStyle,
    iconStyle,
    articleStyle,
    navStyle,
    prevSlide,
    nextSlide,
  } = useSlidePrimary(props);

  return (
    <ul style={ulStyle}>
      {props.slides.map((slide, slideIndex) => (
        <li key={slideIndex + "slide"} style={getListStyle()}>
          <img src={slide.url} height="100%" alt={slide.name} />
        </li>
      ))}

      {!props.slides.length && (
        <li style={getListStyle()}>
          <ImageBroken style={iconStyle} size={64} />
        </li>
      )}

      <article style={articleStyle}>
        <TypographyParagraph value={props.name} />

        <TypographyCaption value={props.description} />
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
