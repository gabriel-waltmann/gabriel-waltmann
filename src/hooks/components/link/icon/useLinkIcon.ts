import { LinkIconEntity } from "@/entities/components/link/icon/LinkIconEntity";
import { LinkIconEnum } from "@/entities/components/link/icon/LinkIconEnum";
import { useScreen } from "@/hooks/useScreen";
import {
  ArrowLeft,
  Building,
  EnvelopeSimple,
  GithubLogo,
  House,
  Icon,
  InstagramLogo,
  LinkedinLogo,
  Timer,
  Wrench,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export type TLinkIconProps = Readonly<LinkIconEntity>;

const getIconComponent = (icon: LinkIconEnum) => {
  switch (icon) {
    case LinkIconEnum.back:
      return ArrowLeft;
    case LinkIconEnum.linkedin:
      return LinkedinLogo;
    case LinkIconEnum.email:
      return EnvelopeSimple;
    case LinkIconEnum.github:
      return GithubLogo;
    case LinkIconEnum.instagram:
      return InstagramLogo;
    case LinkIconEnum.dashboard:
      return House;
    case LinkIconEnum.techs:
      return Wrench;
    case LinkIconEnum.projects:
      return Building;
    case LinkIconEnum.workingTimer:
      return Timer;
  }
};

export function useLinkIcon(props: TLinkIconProps) {
  const [iconComponent, setIconComponent] = useState<Icon>(ArrowLeft);

  const { isMobile } = useScreen();

  useEffect(() => {
    setIconComponent(getIconComponent(props.icon));
  }, [props.icon]);

  return {
    IconComponent: iconComponent,
    setIconComponent,
    size: isMobile ? 28 : 24
  };
}
