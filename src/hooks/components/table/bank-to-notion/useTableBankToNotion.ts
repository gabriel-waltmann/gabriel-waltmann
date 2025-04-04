import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { BankToNotionLogEntity } from "@/entities/BankToNotionLogEntity";
import { CSSProperties, useEffect, useState } from "react";

export type TTableBankToNotionProps = Readonly<{
  logs: BankToNotionLogEntity[];
  style?: CSSProperties
}>

export function useTableBankToNotion(props: TTableBankToNotionProps) {
  const { logs } = props;

  const getColumns = (): TableColumnEntity[] => {
    return [
      {
        name: "bank",
        label: "Banco",
      },
      {
        name: "created_at",
        label: "Data de criação",
      },
      {
        name: "executed_at",
        label: "Data de execução",
      },
    ]
  }

  const getRows = (logs: BankToNotionLogEntity[]): TableRowEntity[] => {
    return logs.map((log, index) => ({
      id: log.id,
      order: index,
      cells: [
        {
          columnName: "created_at",
          label: log.created_at
        },
        {
          columnName: "executed_at",
          label: log.executed_at,
        },
        {
          columnName: "banco",
          label: log.bank,
        }
      ],
    }));
  }

  const [columns, setColumns] = useState<TableColumnEntity[]>([]);

  const [rows, setRows] = useState<TableRowEntity[]>([]);

  useEffect(() => {
    setColumns(getColumns());
    setRows(getRows(logs));
  }, []);

  useEffect(() => {
    setRows(getRows(logs));
  }, [logs]);

  return {
    columns,
    rows,
  };
}