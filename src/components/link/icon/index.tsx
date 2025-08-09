import LinkPrimary from "@/components/link/primary";
import { TLinkIconProps, useLinkIcon } from "@/hooks/components/link/icon/useLinkIcon";

export function LinkIcon(props: TLinkIconProps): JSX.Element {
  const { IconComponent, size } = useLinkIcon(props);

  if (props.href) {
    return (
      <LinkPrimary href={props.href}>
        <IconComponent color={props.color ?? "#121212"} size={size} />
      </LinkPrimary>
    );
  }

  return (
    <button onClick={props.onClick}>
        <IconComponent color={props.color ?? "#121212"} size={size} />
    </button>
  )
}
