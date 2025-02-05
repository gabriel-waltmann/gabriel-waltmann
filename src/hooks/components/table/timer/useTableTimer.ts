import { TableCellEntity } from "@/entities/components/table/TableCellEntity";
import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { TimerEntity } from "@/entities/working-timer/TimerEntity";
import { CSSProperties, useEffect, useState } from "react";

import * as timerDuration from "@/utils/time/time-duration";
import * as dateFormat from "@/utils/date/date-format";

export type TTableTimerProps = Readonly<{
  timers: TimerEntity[];
  onTimerClick?: (workspace: TimerEntity) => void;
  style?: CSSProperties
}>

export function useTableTimer(props: TTableTimerProps) {
  const { timers } = props;

  const getColumns = (): TableColumnEntity[] => {
    return [
      {
        name: "start",
        label: "Start",
      },
      {
        name: "end",
        label: "End",
      },
      {
        name: "duration",
        label: "Duration (Hours)",
      },
      {
        name: "status",
        label: "Status",
      }
    ]
  }

  const getRows = (timers: TimerEntity[]): TableRowEntity[] => {
    return timers.map((timer, index) => {
      const cells: TableCellEntity[] = [
        {
          columnName: "start",
          label: dateFormat.ISOToBR(timer.start_time),
        },
        {
          columnName: "end",
          label: timer.end_time ? dateFormat.ISOToBR(timer.end_time) : "",
        },
        {
          columnName: "duration",
          label: timer.end_time ? timerDuration.getHours(timer.start_time, timer.end_time) : "",
        },
        {
          columnName: "status",
          label: timer.end_time ? "Finished" : "Running...",
        }
      ];

      return ({
        id: String(timer.id),
        order: index,
        cells,
      });
    });
  }

  const onTimerClick = (id: string) => {
    const workspace = timers.find((timer) => timer.id === Number(id));

    if (workspace && props.onTimerClick) {
      props.onTimerClick(workspace);
    }
  }

  const [columns, setColumns] = useState<TableColumnEntity[]>([]);

  const [rows, setRows] = useState<TableRowEntity[]>([]);

  useEffect(() => {
    setColumns(getColumns());
    setRows(getRows(timers));
  }, []);

  useEffect(() => {
    setRows(getRows(timers));
  }, [timers]);

  return {
    columns,
    rows,
    onTimerClick,
  }
}
