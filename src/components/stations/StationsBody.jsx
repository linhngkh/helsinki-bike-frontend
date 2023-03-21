import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const StationsBody = ({
  stations,
  rowsPerPage,
  page,
  setPage,
  
}) => {
  // const { Nimi, Osoite, Kaupunki, Kapasiteet } = stations;

 
  };
  return (
    <TableBody>
      {stations
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((station) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={station.code}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === "number"
                      ? column.format(value)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>

    // <TableBody>
    //   <TableRow hover role="checkbox" tabIndex={-1}>
    //     <TableCell component="th" scope="row">
    //       {Nimi}
    //     </TableCell>
    //     <TableCell>{Osoite}</TableCell>
    //     <TableCell align="right">{Kaupunki}</TableCell>
    //     <TableCell align="right">{Kapasiteet}</TableCell>
    //   </TableRow>
    // </TableBody>
  );
};

export default StationsBody;
