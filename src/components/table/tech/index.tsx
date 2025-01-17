import { TTableTechProps, useTableTech } from "@/hooks/components/table/tech/useTableTech";
import TablePrimary from "@/components/table/primary";

export default function TableTech(props: TTableTechProps): JSX.Element {
  const { rows, columns, onTechClick } = useTableTech(props);

  return (
    <TablePrimary
      onRowClick={onTechClick}
      rows={rows}
      columns={columns}
      style={props.style}
    />
  )
}