import { TLinkPrimaryProps, useLinkPrimary } from "@/hooks/components/link/primary/useLinkPrimary";
import NextLink from "next/link";

export default function Link(props: TLinkPrimaryProps): JSX.Element {
  const { target, linkStyle } = useLinkPrimary(props);

  return (
    <NextLink 
      target={target} 
      href={props.href}
      style={linkStyle}
    >
      {props.children}
    </NextLink>
  );
}
