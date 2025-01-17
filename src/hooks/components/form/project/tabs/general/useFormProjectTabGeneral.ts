import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity";
import { Control, FieldErrors, UseFormRegister, UseFormReturn } from "react-hook-form";

export type TFormProjectTabGeneralProps = Readonly<{
  control: Control<FormProjectStatesEntity["project"]>;
  form: UseFormReturn<FormProjectStatesEntity["project"]>;
  register: UseFormRegister<FormProjectStatesEntity["project"]>;
  errors: FieldErrors<FormProjectStatesEntity["project"]>;
}>;


export function useFormProjectTabGeneral(props: TFormProjectTabGeneralProps) {}