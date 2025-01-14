import ContainerDefault from "@/components/containers/default";
import IndexHeader from "@/components/header";
import PrimaryTabs from "@/components/tabs/primary-tabs";
import { TLayoutDefaultProps, useLayoutDefault } from "./useLayoutDefault";

export default function LayoutDefault(props: TLayoutDefaultProps) {
  const { tabs, tab, toggleTab, mainStyles } = useLayoutDefault(props);

  return (
    <ContainerDefault>
      <IndexHeader />

      <PrimaryTabs tab={tab} tabs={tabs} onChange={toggleTab} />

      <main style={mainStyles}>{props.children}</main>
    </ContainerDefault>
  );
}
