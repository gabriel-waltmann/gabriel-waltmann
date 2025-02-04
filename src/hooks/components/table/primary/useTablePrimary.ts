import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { CSSProperties } from "react";

export type TTablePrimaryProps = Readonly<{
  rows: TableRowEntity[];
  columns: TableColumnEntity[];
  onRowClick?: (id: string) => void;
  style?: CSSProperties
}>;

export function useTablePrimary(props: TTablePrimaryProps) {
  const tableStyle: CSSProperties = {
    width: "100%",
    ...props.style,
  }
  
  return {
    columns: props.columns,
    rows: props.rows,
    tableStyle,
  };
}