import axios from "axios";

import { BASE_URL } from "../constants/BASE_URL";
import { userActions } from "../reducers/userReducer"
import { csrfHandler } from "../csrfHandler";
import { persistor } from '../store';



export const userLoginAction = ({ email, password }) => {

  return async (dispatch) => {
    
    try {
      const csrf = await csrfHandler();

      const { data } = await axios.post(
        `${BASE_URL}/api/users/login`,
        { email, password },
        {
          withCredentials: true,
          headers:
          {
            "Content-Type": "application/json",
            "x-csrf-token": csrf,
            "X-XSRF-TOKEN": csrf
          },
        });
      console.log(data);
      dispatch(
        userActions.renderUserLogin({
          userData: data || {},
        })
      );
    } catch (err) {
      dispatch(
        userActions.errorAtUserLogin({
        }))
    }
  };
};

export const userGetAction = () => {
  return async (dispatch) => {
    try {
      const csrf = await csrfHandler()




      const { data } = await axios.get(`${BASE_URL}/api/users/profile`, {
        withCredentials: true,
        headers:
        {
          "Content-Type": "application/json",
          "x-csrf-token": csrf,
          "X-XSRF-TOKEN": csrf
        }
      });

      dispatch(
        userActions.renderUserGet({
          userData: data || {}
        })
      )

    } catch (error) {
      dispatch(
        userActions.errorAtUserGet({
          message: error,
        }))
    }
  }
}

export const userLogoutAction = () => {
  return async (dispatch) => {
    try {
      const csrf = await csrfHandler();
      persistor.purge();

      console.log('csrf was catched')
      await axios.get(`${BASE_URL}/api/users/logout`, {
        withCredentials: true,
        headers:
        {
          "Content-Type": "application/json",
          "x-csrf-token": csrf,
          "X-XSRF-TOKEN": csrf
        }
      });
      console.log('action logout was called')
      dispatch(
        userActions.renderUserLogout()
      )

    } catch (error) {
      dispatch(
        userActions.errorAtUserLogout({
          message: error,
        }))
    }
  }
}

