import { TableCellEntity } from "./TableCellEntity";

export interface TableRowEntity {
  id: string;
  order: number;
  cells: TableCellEntity[];
}