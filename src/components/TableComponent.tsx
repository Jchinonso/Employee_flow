import React from "react";
import { Table } from "antd";
import StateComponent from "./StateComponent";
import { useEmployeesContext } from "../context/EmployeesContext";

const TableComponent = () => {
  const { state } = useEmployeesContext();
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "State",
      dataIndex: "",
      width: "80%",
      key: "x",
      render: (text, row, index) => {
        return <StateComponent row={row} />;
      },
    },
  ];

  return <Table columns={columns} dataSource={state.employees} />;
};

export default TableComponent;
