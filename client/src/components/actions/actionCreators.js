import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as types from "./actionTypes";

export function changeSignUpInput({ inputName, inputValue }) {
  return {
    type: types.REGISTER_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postSignUp = ({ username, password, department }) => dispatch => {
  dispatch({
    type: types.POST_REGISTER_START
  });

  axiosWithAuth()
    .post("api/auth/register", {
      username,
      password,
      department
    })

    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.POST_REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.POST_REGISTER_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};
