import { TTableWorkspaceProps, useTableWorkspace } from "@/hooks/components/table/workspace/useTableWorkspace";
import TablePrimary from "@/components/table/primary";

export default function TableWorkpace(props: TTableWorkspaceProps): JSX.Element {
  const { rows, columns, onWorkspaceClick } = useTableWorkspace(props);

  return (
    <TablePrimary
      onRowClick={onWorkspaceClick}
      rows={rows}
      columns={columns}
      style={props.style}
    />
  )
}