import { CSSProperties } from "react";
import { LinkIconName } from "../links/link-icon/useLinkIcon";
import { useScreen } from "@/hooks/useScreen";

const links = [
  {
    icon: LinkIconName.email,
    href: "mailto:gabrielwaltmann@gmail.com",
  },
  {
    icon: LinkIconName.instagram,
    href: "https://www.instagram.com/waltmanngabriel",
  },
  {
    icon: LinkIconName.github,
    href: "https://github.com/gabriel-waltmann",
  },
  {
    icon: LinkIconName.linkedin,
    href: "https://www.linkedin.com/in/gabrielwaltmann",
  },
];

const ulStyles: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".8rem",
};

export type THeaderProps = Readonly<{}>;

export function useHeader(props: THeaderProps) {
  const { isMobile } = useScreen();

  const headerStyle: CSSProperties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "16% 80%",
    gridTemplateRows: isMobile ? "1fr" : "50% 50%",
    justifyItems: isMobile ? "center" : "start",
  };

  return {
    headerStyle,
    ulStyles,
    links,
  };
}
