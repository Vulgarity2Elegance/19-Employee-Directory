import React from "react";
import Container from "@material-ui/core/Container";
import UsersTable from "./components/Table";

function App() {
  return (
    <div className="App">
      <Container className="sm">
        <UsersTable />
      </Container>
    </div>
  );
}

export default App;
