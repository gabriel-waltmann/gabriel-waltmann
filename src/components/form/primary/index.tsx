import { TFormPrimaryProps, useFormPrimary } from "@/hooks/components/form/primary/useFormPrimary";
import { DevTool } from "@hookform/devtools";

export default function FormPrimary(props: TFormPrimaryProps): JSX.Element {
  const { formStyle, onSubmit } = useFormPrimary(props);

  return <form onSubmit={onSubmit} style={formStyle}>
    {props.children}
    <DevTool control={props.control} />
  </form>;
}