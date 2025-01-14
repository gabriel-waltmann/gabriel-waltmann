import { TLinkProps } from "./useLink";
import NextLink from "next/link";

export default function Link(props: TLinkProps) {
  return (
    <NextLink target="_blank" href={props.href}>
      {props.children}
    </NextLink>
  );
}
