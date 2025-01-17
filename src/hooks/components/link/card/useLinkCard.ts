import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TLinkCardProps = Readonly<{
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}>;

const containerStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  textAlign: "center",
};

export function useLinkCard(props: TLinkCardProps) {
  const { isMobile } = useScreen();

  const captionStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: isMobile ? ".1rem" : ".5rem",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
  };

  return {
    containerStyle,
    captionStyle,
  };
}
