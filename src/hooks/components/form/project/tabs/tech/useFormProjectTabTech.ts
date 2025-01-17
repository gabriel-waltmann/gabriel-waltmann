import { FormProjectActionsEntity } from "@/entities/components/form/project/FormProjectActionsEntity";
import { FormProjectStatesEntity } from "@/entities/components/form/project/FormProjectStatesEntity";

export type TFormProjectTabTechProps = Readonly<{
  techAlreadyExists: (name: string) => boolean;
  actions: FormProjectActionsEntity,
  states: FormProjectStatesEntity,
}>;

export function useFormProjectTabTech(props: TFormProjectTabTechProps) {}