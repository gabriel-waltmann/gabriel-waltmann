import { api } from "@/api/api";
import { FinanceImportEntity } from "@/entities/FinanceImportEntity";

export interface FinanceImportCreateDTO {
  pdf: File;
  bank: "inter" | "nubank";
}

export class FinanceImportController {
  public async retrieves(): Promise<FinanceImportEntity[]> {
    const { data, status } = await api.get("/finance/import");

    if (status !== 200) {
      throw new Error(JSON.stringify({ data, status }))
    }

    return data
  }

  public async create(params: FinanceImportCreateDTO): Promise<FinanceImportEntity> {
    const formData = new FormData();

    formData.append("bank", params.bank);
  
    formData.append("pdf", params.pdf, "document.pdf");

    
    const { data, status } = await api.post("/finance/import", formData)

    if (status !== 201) {
      throw new Error(JSON.stringify({ data, status }))      
    }

    return data
  }
}
