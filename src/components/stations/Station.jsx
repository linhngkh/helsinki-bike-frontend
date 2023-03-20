import { TableCell, TableRow, TablePagination } from "@mui/material";

const Station = ({ station }) => {
  const { ID, Nimi } = station || null;
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>{ID}</TableCell>
      <TableCell>{Nimi}</TableCell>
      <TableCell>{Nimi}</TableCell>
      <TableCell>{Nimi}</TableCell>
    </TableRow>
  );
};

export default Station;
