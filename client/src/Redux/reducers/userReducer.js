import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";


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
    errorAtUserLogin(state, ) {
      state.loadingUser = 'idle';
      state.messageUser = `User or Password doesnt match`;
    },
    renderUserGet(state, action) {
      state.loadingUser = 'idle';
      state.userData = action.payload.userData;
      state.messageUser = 'The User is fetched';
    },
    errorAtUserGet(state) {
      state.loadingUser = 'idle';
      state.messageUser = `Something is wrong:`;
    },
    renderUserLogout(state) {
      state.loadingUser = 'idle';
      state.userData = null;
      state.userIsLogged = 'false';
      state.messageUser = 'The User logout';
    },
    errorAtUserLogout(state) {
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


export default userDataSlice.reducer;
export const userActions = userDataSlice.actions;
