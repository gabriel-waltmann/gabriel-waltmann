import { TButtonProps } from "./useButton";

export default function Button(props: TButtonProps): JSX.Element {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.value ?? props.children}
    </button>
  );
}
