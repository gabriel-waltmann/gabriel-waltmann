import { TTableTimerProps, useTableTimer } from "@/hooks/components/table/timer/useTableTimer";
import TablePrimary from "@/components/table/primary";

export default function TableTimer(props: TTableTimerProps): JSX.Element {
  const { rows, columns, onTimerClick } = useTableTimer(props);

  return (
    <TablePrimary
      onRowClick={onTimerClick}
      rows={rows}
      columns={columns}
      style={props.style}
    />
  )
}