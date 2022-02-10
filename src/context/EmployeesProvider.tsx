import { useMemo, useEffect, useState, useReducer, useCallback } from "react";
import EmployeesContext from "./EmployeesContext";
import { createEmployee } from "../actions/CreateEmployeeAction";
import { getEmployee } from "../actions/GetEmployeesAction";
import { updateEmployee } from "../actions/UpdateEmployeeAction";
import employeeReducer from "../reducers";

const EmployeesProvider = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    state: "Added",
  });

  const [state, dispatch] = useReducer(employeeReducer, { employees: [] });

  useEffect(() => {
    if (state.employees.length <= 0) {
      getEmployee(dispatch);
    }
  }, [state.employees]);

  const handleAddChange = useCallback(
    (e) => {
      setEmployee({
        ...employee,
        name: e.target.value,
      });
    },
    [employee]
  );

  const handleStateClick = useCallback((e, item, id) => {
    e.preventDefault();
    updateEmployee(dispatch, id, { state: item });
  }, []);

  const handleAddClick = useCallback(
    (e) => {
      e.preventDefault();
      if (employee.name) {
        createEmployee(dispatch, employee);
      }
      setEmployee({
        ...employee,
        name: "",
      });
    },
    [employee]
  );

  const contextValue = useMemo(() => {
    return {
      employee,
      state,
      handleStateClick,
      handleAddChange,
      handleAddClick,
    };
  }, [employee, state, handleStateClick, handleAddClick, handleAddChange]);
  return (
    <EmployeesContext.Provider value={contextValue}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
