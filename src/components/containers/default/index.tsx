import {
  TContainerDefaultProps,
  useContainerDefault,
} from "./useContainerDefault";

export default function ContainerDefault(props: TContainerDefaultProps) {
  const { containerStyle } = useContainerDefault(props);

  return <div style={containerStyle}>{props.children}</div>;
}
