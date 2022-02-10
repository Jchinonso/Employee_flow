import axios from "axios";
import { GET_EMPLOYEES } from "./actionTypes";
import { API_URL, config } from "./utils";

export const getEmployee = async (dispatch) => {
  try {
    const employees = await axios.get(`${API_URL}`, config);
    dispatch({
      type: GET_EMPLOYEES,
      employees: employees.data,
    });
  } catch (e) {
    throw e;
  }
};
