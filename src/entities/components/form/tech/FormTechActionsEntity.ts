import { TechEntity } from "@/entities/TechEntity";
import { FormTechStatesEntity } from "@/entities/components/form/tech/FormTechStatesEntity";

export interface FormTechActionsEntity {
  showCreateTechForm(): void,

  showUpdateTechForm(project: TechEntity): void,

  hideTechForm(): void,

  onTechSubmit(data: FormTechStatesEntity["tech"]): Promise<void>,

  onTechDelete(): Promise<void>,
};