import LinkPrimary from "@/components/link/primary";
import { TLinkIconProps, useLinkIcon } from "@/hooks/components/link/icon/useLinkIcon";

export function LinkIcon(props: TLinkIconProps): JSX.Element {
  const { IconComponent, size } = useLinkIcon(props);

  return (
    <LinkPrimary href={props.href}>
      {<IconComponent color={props.color ?? "#121212"} size={size} />}
    </LinkPrimary>
  );
}
