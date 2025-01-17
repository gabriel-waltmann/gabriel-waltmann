import { CSSProperties, FormEvent, ReactNode } from "react";
import { Control } from "react-hook-form";

export type TFormPrimaryProps = Readonly<{
  children?: ReactNode,
  onSubmit?: () => void,
  style?: CSSProperties
  control: Control<any>
}>;

export function useFormPrimary(props: TFormPrimaryProps) {
  const formStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    ...props.style,
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit();
    }
  }

  return {
    formStyle,
    onSubmit
  }
}