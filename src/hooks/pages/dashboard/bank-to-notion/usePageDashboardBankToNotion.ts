import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import * as bankToNotionMiddleware from "@/middlewheres/bank-to-notion/bank-to-notion";
import { BankToNotionLogEntity } from "@/entities/BankToNotionLogEntity";

export type TPageDashboardBankToNotionProps = Readonly<{}>;

export const usePageDashboardBankToNotion = (props: TPageDashboardBankToNotionProps) => {
  const [logs, setLogs] = useState<BankToNotionLogEntity[]>([]);

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

      const log = await bankToNotionMiddleware.create({ pdf, bank: "inter" });

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
  
      const log = await bankToNotionMiddleware.create({ pdf, bank: "nubank" });

      setLogs([log, ...logs]);
    } catch (error: any) {
      console.error(error);
    }
  }

  const handleLogs = async () => {
    try {
      const logs = await bankToNotionMiddleware.retrieves();
  
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