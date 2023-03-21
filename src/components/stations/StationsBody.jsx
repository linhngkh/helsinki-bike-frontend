import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const StationsBody = ({ station }) => {
  const { Nimi, Osoite, Kaupunki, Kapasiteet } = station;
  return (
    <TableBody>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell component="th" scope="row">
          {Nimi}
        </TableCell>
        <TableCell>{Osoite}</TableCell>
        <TableCell align="right">{Kaupunki}</TableCell>
        <TableCell align="right">{Kapasiteet}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default StationsBody;
