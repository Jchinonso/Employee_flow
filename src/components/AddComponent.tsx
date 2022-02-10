import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

import { useEmployeesContext } from "../context/EmployeesContext";

const AddComponent = (): JSX.Element => {
  const { handleAddClick, handleAddChange, employee } = useEmployeesContext();

  return (
    <AddComponentContainer>
      <InputBox
        onChange={(e) => handleAddChange(e)}
        placeholder="Employee"
        size="large"
        value={employee.name}
      />
      <AddButton onClick={handleAddClick} type="primary">
        Add
      </AddButton>
    </AddComponentContainer>
  );
};

export default AddComponent;

const InputBox = styled(Input)`
  margin-right: 20px;
  width: 250px;
`;
const AddButton = styled(Button)`
  width: 150px;
`;
const AddComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30%;
`;
