import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../actions/actionTypes";

const employeeReducer = (state, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: [...action.employees],
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.employee],
      };
    case UPDATE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.id) {
            return action.employee;
          }

          return employee;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default employeeReducer;
