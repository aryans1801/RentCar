import axios from "axios";
import { URL } from "../../App";
import { message } from "antd";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${URL}/api/users/login`, reqObj);
    //console.log(response);
    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login Success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${URL}/api/users/register`, reqObj);
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
    message.success("Regstration Successful");
    //console.log(response);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
