import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useEmployeesContext } from "../context/EmployeesContext";

const states = ["Added", "In-check", "Approved", "Active", "In-active"];

const StateComponent = ({ row }): JSX.Element => {
  const { handleStateClick } = useEmployeesContext();

  return (
    <StateButtonContainer>
      {states.map((item, index) => (
        <StateButton
          onClick={(e) => handleStateClick(e, item, row.id)}
          key={`${item}${index}`}
          type={row.state === item ? "primary" : "default"}
        >
          {item}
        </StateButton>
      ))}
    </StateButtonContainer>
  );
};

export default StateComponent;

const StateButton = styled(Button)`
  width: 200px;
  height: 50px;
  position: relative;
  border-top-right-radius: 50px;
  border-left-style: none;
  border-bottom-right-radius: 50px;
`;

const StateButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
