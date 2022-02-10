import { createContext, useContext } from "react";

const EmployeesContext = createContext({
  employee: {name: "", state: "Added"},
  state: {employees: []},
  handleStateClick: (e, item, id) => {},
  handleAddClick : (e) => {},
  handleAddChange: (e) => {}
});


export const useEmployeesContext = () => useContext(EmployeesContext);
export default EmployeesContext;