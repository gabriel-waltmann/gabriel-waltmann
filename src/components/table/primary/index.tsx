import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TTablePrimaryProps, useTablePrimary } from "@/hooks/components/table/primary/useTablePrimary";

export default function TablePrimary(props: TTablePrimaryProps): JSX.Element {
  const { rows, columns, tableStyle } = useTablePrimary(props);

  return (
    <TableContainer component={Paper} sx={tableStyle}>
      <Table size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell align={index === 0 ? "left" : "right"} key={column.name}>
                {column.label}
              </TableCell>
          ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
              hover
              sx={{ cursor: 'pointer' }}
              key={index+"table-row"}
            >
              {row.cells.map((cell, index) => (
                <TableCell 
                  onClick={(event) => props.onRowClick?.(row.id)}
                  component="th"
                  align={index === 0 ? "left" : "right"} 
                  key={index+"table-cell"}
                  scope="row"
                  sx={{ padding: cell.image ? "0" : ".2rem 1rem" }}
                  padding="none"
                >
                  {cell.image 
                    ? <img src={cell.image} alt={cell.label} height="32px" /> 
                    : <span>{cell.label}</span>
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  )

}
