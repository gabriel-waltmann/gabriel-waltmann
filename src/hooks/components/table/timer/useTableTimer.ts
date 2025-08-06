import { TableCellEntity } from "@/entities/components/table/TableCellEntity";
import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { CSSProperties, useEffect, useState } from "react";

import * as timerDuration from "@/utils/time/time-duration";
import * as dateFormat from "@/utils/date/date-format";
import { ProjectTimerEntity } from "@/entities/project/timer/ProjectTimerEntity";

export type TTableTimerProps = Readonly<{
  timers: ProjectTimerEntity[];
  onTimerClick?: (projectTimer: ProjectTimerEntity) => void;
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

  const getRows = (timers: ProjectTimerEntity[]): TableRowEntity[] => {
    return timers.map((timer, index) => {
      const cells: TableCellEntity[] = [
        {
          columnName: "start",
          label: dateFormat.ISOToBR(timer.startTime),
        },
        {
          columnName: "end",
          label: timer.endTime ? dateFormat.ISOToBR(timer.endTime) : "",
        },
        {
          columnName: "duration",
          label: timer.endTime ? timerDuration.getHours(timer.startTime, timer.endTime) : "",
        },
        {
          columnName: "status",
          label: timer.endTime ? "Finished" : "Running...",
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
