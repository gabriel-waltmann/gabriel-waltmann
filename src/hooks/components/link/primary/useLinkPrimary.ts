import { CSSProperties, ReactNode, useEffect, useState } from "react";

export type TLinkPrimaryProps = Readonly<{
  href: string;
  openInNewTab?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}>;

enum LinkTarget {
  _self = "_self",
  _blank = "_blank",
}

export function useLinkPrimary(props: TLinkPrimaryProps) {
  const [target, setTarget] = useState<LinkTarget>(LinkTarget._self);

  useEffect(() => {
      setTarget(props.openInNewTab ? LinkTarget._blank : LinkTarget._self);
  }, [, props.openInNewTab]);

  return {
    target,
    linkStyle: props.style
  };
}
