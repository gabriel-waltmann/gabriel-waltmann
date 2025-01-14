import { useScreen } from "@/hooks/useScreen";
import Link from "../link";
import { TLinkIconProps, useLinkIcon } from "./useLinkIcon";

export function LinkIcon(props: TLinkIconProps) {
  const { isMobile } = useScreen();
  const { IconComponent } = useLinkIcon(props);

  return (
    <Link href={props.href}>
      {<IconComponent color="#121212" size={isMobile ? 28 : 24} />}
    </Link>
  );
}
