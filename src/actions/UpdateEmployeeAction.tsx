import axios from "axios";
import { UPDATE_EMPLOYEE } from "./actionTypes";
import { API_URL, config } from "./utils";

export const updateEmployee = async (dispatch, id, record) => {
  try {
    const employee = await axios.put(`${API_URL}/${id}`, record, config);
    dispatch({
      type: UPDATE_EMPLOYEE,
      employee: employee.data,
      id: id,
    });
  } catch (e) {
    throw e;
  }
};
