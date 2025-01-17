import { TContainerPrimaryProps, useContainerPrimary } from "@/hooks/components/container/useContainerPrimary";

export default function ContainerDefault(props: TContainerPrimaryProps): JSX.Element {
  const { containerStyle } = useContainerPrimary(props);

  return <div style={containerStyle}>{props.children}</div>;
}
