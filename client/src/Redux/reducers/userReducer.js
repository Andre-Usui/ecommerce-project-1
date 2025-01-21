import { createSlice, createAction } from '@reduxjs/toolkit';
import {userLogoutAction} from '../actions/userAction';
import { PURGE } from "redux-persist";
import { persistor } from '../store';


export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: null,
    loadingUser: 'idle',
    userIsLogged: 'false',
    messageUser: ''
  },
  reducers: {
    loadingUser(state) {
      state.loadingUser = 'pending';
      state.messageUser = 'loading';
    },
    renderUserLogin(state, action) {
      state.loadingUser = 'idle';
      state.userData = action.payload.userData;
      state.userIsLogged = 'true';
      state.messageUser = 'User is logged';
    },
    errorAtUserLogin(state, action) {
      state.loadingUser = 'idle';
      state.messageUser = `User or Password doesnt match`;
    },
    renderUserGet(state, action) {
      state.loadingUser = 'idle';
      state.userData = action.payload.userData;
      state.messageUser = 'The User is fetched';
    },
    errorAtUserGet(state, action) {
      state.loadingUser = 'idle';
      state.messageUser = `Something is wrong:`;
    },
    renderUserLogout(state, action) {
      state.loadingUser = 'idle';
      state.userData = null;
      state.userIsLogged = 'false';
      state.messageUser = 'The User logout';
    },
    errorAtUserLogout(state, action) {
      state.loadingUser = 'idle';
      state.messageUser = `Something is wrong:`;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (initialState) => {
        return initialState;
    });
}


});
/*

  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.userData = null;
      state.loadingUser = 'idle';
      state.userIsLogged = 'false'
      return 
    })
  }
import { PURGE } from "redux-persist";

export const logout = createAction('logout');extraReducers: (builder) =>{
    builder.addCase(PURGE, (state) => {
      logout.removeAll(state)
    })
  }
*/


export const userActions = userDataSlice.actions;
