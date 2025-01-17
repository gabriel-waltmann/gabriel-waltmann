import { FormProjectActionsEntity } from "@/entities/components/form/project/FormProjectActionsEntity"
import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity"

  export type TFormProjectTabFileProps = Readonly<{
    actions: FormProjectActionsEntity,
    states: FormProjectStatesEntity,
  }>
  
export function useFormProjectTabFile(props: TFormProjectTabFileProps) {}