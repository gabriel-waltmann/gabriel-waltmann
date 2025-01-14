import {
  ArrowLeft,
  EnvelopeSimple,
  GithubLogo,
  Icon,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export enum LinkIconName {
  back = 0,
  linkedin = 1,
  email = 2,
  github = 3,
  instagram = 4,
}

export type TLinkIconProps = Readonly<{
  href: string;
  icon: LinkIconName;
}>;

const getIconComponent = (icon: LinkIconName) => {
  switch (icon) {
    case LinkIconName.back:
      return ArrowLeft;
    case LinkIconName.linkedin:
      return LinkedinLogo;
    case LinkIconName.email:
      return EnvelopeSimple;
    case LinkIconName.github:
      return GithubLogo;
    case LinkIconName.instagram:
      return InstagramLogo;
  }
};

export function useLinkIcon(props: TLinkIconProps) {
  const [iconComponent, setIconComponent] = useState<Icon>(ArrowLeft);

  useEffect(() => {
    setIconComponent(getIconComponent(props.icon));
  }, [props.icon]);

  return {
    IconComponent: iconComponent,
    setIconComponent,
  };
}
