import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const JourneyBody = ({ journey }) => {
  const {
    Departure_station_name,
    Return_station_name,
    Duration,
    Covered_distance,
  } = journey;
  return (
    <TableBody>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell component="th" scope="row">
          {Departure_station_name}
        </TableCell>
        <TableCell>{Return_station_name}</TableCell>
        <TableCell align="right">{Covered_distance}</TableCell>
        <TableCell align="right">{Duration}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default JourneyBody;
