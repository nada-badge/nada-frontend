import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  personal_register: {
    email: '',
    password: '',
    passwordConfirm: '',
    userType: 1,
    userName: '',
    phoneNumber: '',
  },
  team_register: {
    email: '',
    password: '',
    passwordConfirm: '',
    userType: 2,
    represent: '',
    groupName: '',
    phoneNumber: '',
    category: '',
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

export default authSlice;
export const { changeField, initializeForm, changeBtnState } =
  authSlice.actions;

const authSelect = (type, field) => (rootState) => {
  return (
    rootState.auth[`${type}_register`][field] ||
    initialState[`${type}_register`][field]
  );
};

export const authSelector = (type, field) =>
  createSelector(authSelect(type, field), (field) => field);
