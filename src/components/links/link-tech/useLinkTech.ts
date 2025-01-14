import { TechEntity } from "@/entities/TechEntity";
import { useScreen } from "@/hooks/useScreen";
import { CSSProperties } from "react";

export type TLinkTechProps = Readonly<{
  tech: TechEntity;
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

export function useLinkTech(props: TLinkTechProps) {
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
    tech: props.tech,
  };
}
