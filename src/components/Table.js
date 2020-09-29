import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import API from "../utils/API";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableBody = withStyles(() => ({
  root: {
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    fontSize: 14,
  },
}))(TableBody);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
      searchBy: "fullName",
    };
  }

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        const tableData = res.data.results.map((user) => ({
          ...user,
          thumbnail: user.picture.thumbnail,
          fullName: user.name.first + " " + user.name.last,
          phone: user.phone,
          email: user.email,
          date: user.dob.date,
        }));
        this.setState({ users: tableData }, () => console.log(this.state));
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">
                <p>Full Name</p>
              </StyledTableCell>
              <StyledTableCell align="center">
                <p>Phone</p>
              </StyledTableCell>
              <StyledTableCell align="center">
                <p>Email</p>
              </StyledTableCell>
              <StyledTableCell align="center">
                <p>DOB</p>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <StyledTableBody>
            {this.state.users
              .filter((user) =>
                user.fullName
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase().trim())
              )

              .map((user, i) => (
                <Results
                  key={i}
                  thumbnail={user.picture.thumbnail}
                  fullName={user.fullName}
                  phone={user.phone}
                  email={user.email}
                  date={user.dob.date}
                />
              ))}
          </StyledTableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(UsersTable);
