import { createSlice, createSelector } from '@reduxjs/toolkit';

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
    userName: '',
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
    },
  },
});

const emailSelect = (rootState) =>
  rootState.auth.register.email || initialState.register.email;

const passwordSelect = (rootState) =>
  rootState.auth.register.password || initialState.register.password;
const passwordConfirmSelect = (rootState) =>
  rootState.auth.register.passwordConfirm ||
  initialState.register.passwordConfirm;

export default authSlice;
export const { changeField, initializeForm } = authSlice.actions;
export const emailSelector = createSelector(emailSelect, (email) => email);
export const passwordSelector = createSelector(
  passwordSelect,
  passwordConfirmSelect,
  (password, passwordConfirm) => ({ password, passwordConfirm }),
);
