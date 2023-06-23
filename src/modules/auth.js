import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    password: '',
    passwordConfirm: '',
    userType: 1,
    username: '',
    phoneNumber: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
      state.error = {
        email: null,
        password: null,
      };
    },
  },
});

export default authSlice;
export const { changeField, initializeForm } = authSlice.actions;
