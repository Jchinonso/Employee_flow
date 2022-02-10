import React from "react";
import styled from "styled-components";
import "./App.css";

import AddComponent from "./components/AddComponent";
import TableComponent from "./components/TableComponent";

import EmployeesProvider from "./context/EmployeesProvider";

const App = (): JSX.Element => {
  return (
    <EmployeesProvider>
      <Container className="App">
        <AddComponent />
        <MainComponent>
          <TableComponent />
        </MainComponent>
      </Container>
    </EmployeesProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
`;

const MainComponent = styled.div``;

export default App;
