import { CSSProperties } from "react";
import { useScreen } from "@/hooks/useScreen";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";

const links = [
  {
    icon: LinkIconEnum.email,
    href: "mailto:gabrielwaltmann@gmail.com",
  },
  {
    icon: LinkIconEnum.instagram,
    href: "https://www.instagram.com/waltmanngabriel",
  },
  {
    icon: LinkIconEnum.github,
    href: "https://github.com/gabriel-waltmann",
  },
  {
    icon: LinkIconEnum.linkedin,
    href: "https://www.linkedin.com/in/gabrielwaltmann",
  },
];

const ulStyles: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".8rem",
};

export type THeaderPrimaryProps = Readonly<{}>;

export function useHeaderPrimary(props: THeaderPrimaryProps) {
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
