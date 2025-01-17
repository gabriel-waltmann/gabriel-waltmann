import { TButtonPrimaryProps } from "@/hooks/components/button/primary/useButtonPrimary";

export default function ButtonPrimary(props: TButtonPrimaryProps): JSX.Element {
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} style={props.style}>
      {props.value ?? props.children}
    </button>
  );
}
