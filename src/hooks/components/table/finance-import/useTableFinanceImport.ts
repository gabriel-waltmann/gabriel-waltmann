import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { FinanceImportEntity } from "@/entities/FinanceImportEntity";
import { CSSProperties, useEffect, useState } from "react";

export type TTableBankToNotionProps = Readonly<{
  logs: FinanceImportEntity[];
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

  const getRow = (log: FinanceImportEntity, index: number): TableRowEntity => {
    const dateConf: Intl.DateTimeFormatOptions = { 
      day: "2-digit", 
      month: "2-digit", 
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const createdAt = new Date(log.created_at);
    const createdAtLabel = createdAt.toLocaleDateString("pt-BR", dateConf);

    const executedAt = log.executed_at ? new Date(log.executed_at) : null;
    const executedAtLabel = executedAt ? executedAt.toLocaleDateString("pt-BR", dateConf) : "";

    return {
      id: log.id,
      order: index,
      cells: [
        {
          columnName: "bank",
          label: log.bank,
        },
        {
          columnName: "created_at",
          label: createdAtLabel,
        },
        {
          columnName: "executed_at",
          label: executedAtLabel,
        },
      ],
    }
  }

  const getRows = (logs: FinanceImportEntity[]): TableRowEntity[] => logs.map(getRow);

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