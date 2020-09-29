import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

//using props to populate the rows of the table
function Results(props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img src={props.thumbnail} alt="thumbnail"></img>
      </TableCell>
      <TableCell align="center">{props.fullName}</TableCell>
      <TableCell align="center">{props.phone}</TableCell>
      <TableCell align="center">{props.email}</TableCell>
      <TableCell align="center">{props.age}</TableCell>
    </TableRow>
  );
}

export default Results;
