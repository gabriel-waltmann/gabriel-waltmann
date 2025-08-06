import { FinanceImportController } from "@/controller/finance-import/FinanceImportController";
import { FinanceImportEntity } from "@/entities/FinanceImportEntity";
import { ChangeEvent, CSSProperties, useEffect, useState } from "react";

export type TPageDashboardFinanceImportProps = Readonly<{}>;

export const usePageDashboardFinanceImport = (props: TPageDashboardFinanceImportProps) => {
  const [logs, setLogs] = useState<FinanceImportEntity[]>([]);

  const financeImportController = new FinanceImportController()

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  };

  const ulStyle: CSSProperties = {
    gap: "1rem",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  }

  const onUploadInterBank = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const pdf = e.target.files?.length
        ? e.target.files[0]
        : null;

      if (!pdf) return;

      const log = await financeImportController.create({ pdf, bank: "inter" });

      setLogs([...logs, log]);
    } catch (error: any) {
      console.error(error);
    }
  }

  const onUploadNubank = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const pdf = e.target.files?.length
        ? e.target.files[0]
        : null;
  
      if (!pdf) return;
  
      const log = await financeImportController.create({ pdf, bank: "nubank" });

      setLogs([log, ...logs]);
    } catch (error: any) {
      console.error(error);
    }
  }

  const handleLogs = async () => {
    try {
      const logs = await financeImportController.retrieves();
  
      setLogs(logs);
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleLogs();
  }, []);

  return {
    headerStyle,
    ulStyle,
    onUploadInterBank,
    onUploadNubank,
    logs,
  };
}