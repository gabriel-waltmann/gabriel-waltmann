import ContainerPrimary from "@/components/container/primary";
import HeaderPrimary from "@/components/header/primary";
import PrimaryTabs from "@/components/tab/primary";
import { TLayoutPrimaryProps, useLayoutPrimary } from "@/hooks/layouts/primary/useLayoutPrimary";

export default function Layout(props: TLayoutPrimaryProps) {
  const { tabs, tab, toggleTab, mainStyles } = useLayoutPrimary(props);

  return (
    <ContainerPrimary>
      <HeaderPrimary />

      <PrimaryTabs tab={tab} tabs={tabs} onChange={toggleTab} />

      <main style={mainStyles}>{props.children}</main>
    </ContainerPrimary>
  );
}
