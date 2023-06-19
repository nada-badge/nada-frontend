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
  error: {
    email: null,
    password: null,
    passwordConfirm: null,
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
    register_error: (state, { payload: { key, value } }) => {
      state.error[key] = value;
    },
  },
});

export default authSlice;
export const { changeField, initializeForm, register_error } =
  authSlice.actions;
