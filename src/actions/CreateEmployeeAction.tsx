import axios from "axios";

import { ADD_EMPLOYEE } from "./actionTypes";
import { API_URL, config } from "./utils";

export const createEmployee = async (dispatch, data) => {
  try {
    const employee = await axios.post(`${API_URL}`, data, config);
    dispatch({
      type: ADD_EMPLOYEE,
      employee: employee.data,
    });
  } catch (e) {
    throw e;
  }
};
