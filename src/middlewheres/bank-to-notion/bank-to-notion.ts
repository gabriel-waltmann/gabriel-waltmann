import { BankToNotionLogEntity } from "@/entities/BankToNotionLogEntity";

export const retrieves = async (): Promise<BankToNotionLogEntity[]> => {
  const response = await fetch("/working-timer-api/bank-to-notion");

  if (response.status !== 200) {
    throw new Error("Unable to retrieve import logs");
  }

  const { logs } = await response.json();

  return logs;
} 

interface BankToNotionCreateDTO {
  pdf: File;
  bank: "inter" | "nubank";
}
export const create = async (props: BankToNotionCreateDTO): Promise<BankToNotionLogEntity> => {
  const formData = new FormData();

  const blob = new Blob([props.pdf], {
    type: props.pdf.type,
  });

  if (!blob) {
    throw new Error("Unable to create project file");
  }

  formData.append("bank", props.bank);

  formData.append("pdf", blob);

  const response = await fetch("/working-timer-api/bank-to-notion", {
    method: "POST",
    body: formData,
  });

  if (response.status !== 201) {
    throw new Error("Unable to start import");
  }

  return await response.json();
}