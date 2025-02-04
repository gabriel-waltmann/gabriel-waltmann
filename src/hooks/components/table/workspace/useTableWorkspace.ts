import { TableCellEntity } from "@/entities/components/table/TableCellEntity";
import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { WorkspaceEntity } from "@/entities/WorkspaceEntity";
import { CSSProperties, useEffect, useState } from "react";

export type TTableWorkspaceProps = Readonly<{
  workspaces: WorkspaceEntity[];
  onWorkspaceClick?: (workspace: WorkspaceEntity) => void;
  style?: CSSProperties
}>

export function useTableWorkspace(props: TTableWorkspaceProps) {
  const { workspaces } = props;

  const getColumns = (): TableColumnEntity[] => {
    return [
      {
        name: "name",
        label: "Name",
      },
      {
        name: "priceByHour",
        label: "Preço por hora",
      }
    ]
  }

  const getRows = (workspaces: WorkspaceEntity[]): TableRowEntity[] => {
    return workspaces.map((workspace, index) => {
      const cells: TableCellEntity[] = [
        {
          columnName: "name",
          label: workspace.name,
        },
        {
          columnName: "priceByHour",
          label: String(workspace.priceByHour ?? workspace.price_by_hour ?? 0),
        }
      ];

      return ({
        id: String(workspace.id),
        order: index,
        cells,
      });
    });
  }

  const onWorkspaceClick = (id: string) => {
    const workspace = workspaces.find((workspace) => workspace.id === Number(id));

    if (workspace && props.onWorkspaceClick) {
      props.onWorkspaceClick(workspace);
    }
  }

  const [columns, setColumns] = useState<TableColumnEntity[]>([]);

  const [rows, setRows] = useState<TableRowEntity[]>([]);

  useEffect(() => {
    setColumns(getColumns());
    setRows(getRows(workspaces));
  }, []);

  useEffect(() => {
    setRows(getRows(workspaces));
  }, [workspaces]);

  return {
    columns,
    rows,
    onWorkspaceClick,
  };
}