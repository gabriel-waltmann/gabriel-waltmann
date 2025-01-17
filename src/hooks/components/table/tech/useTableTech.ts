import { TableColumnEntity } from "@/entities/components/table/TableColumnEntity";
import { TableRowEntity } from "@/entities/components/table/TableRowEntity";
import { TechEntity } from "@/entities/TechEntity";
import { CSSProperties, useEffect, useState } from "react";

export type TTableTechProps = Readonly<{
  techs: TechEntity[];
  onTechClick?: (tech: TechEntity) => void;
  style?: CSSProperties
}>

export function useTableTech(props: TTableTechProps) {
  const { techs } = props;

  const getColumns = (): TableColumnEntity[] => {
    return [
      {
        name: "name",
        label: "Name",
      },
      {
        name: "image",
        label: "Image",
      },
      {
        name: "link",
        label: "Link",
      }
    ]
  }

  const getRows = (techs: TechEntity[]): TableRowEntity[] => {
    return techs.map((tech, index) => ({
      id: tech.id,
      order: index,
      cells: [
        {
          columnName: "name",
          label: tech.name
        },
        {
          columnName: "image",
          image: tech.file.key,
          label: tech.name
        },
        {
          columnName: "link",
          label: tech.link.name,
        }
      ],
    }));
  }

  const onTechClick = (id: string) => {
    const tech = techs.find((tech) => tech.id === id);

    if (tech && props.onTechClick) {
      props.onTechClick(tech);
    }
  }

  const [columns, setColumns] = useState<TableColumnEntity[]>([]);

  const [rows, setRows] = useState<TableRowEntity[]>([]);

  useEffect(() => {
    setColumns(getColumns());
    setRows(getRows(techs));
  }, []);

  useEffect(() => {
    setRows(getRows(techs));
  }, [techs]);

  return {
    columns,
    rows,
    onTechClick,
  };
}