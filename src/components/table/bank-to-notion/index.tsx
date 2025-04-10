import { TTableBankToNotionProps, useTableBankToNotion } from "@/hooks/components/table/bank-to-notion/useTableBankToNotion";
import TablePrimary from "@/components/table/primary";

export default function TableBankToNotion(props: TTableBankToNotionProps): JSX.Element {
  const { rows, columns } = useTableBankToNotion(props);

  return (
    <TablePrimary
      rows={rows}
      columns={columns}
      style={props.style}
    />
  )
}