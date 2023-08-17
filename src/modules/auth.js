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

const emailSelect = (rootState) =>
  rootState.auth.register.email || initialState.register.email;

const passwordSelect = (rootState) =>
  rootState.auth.register.password || initialState.register.password;

const passwordConfirmSelect = (rootState) =>
  rootState.auth.register.passwordConfirm ||
  initialState.register.passwordConfirm;

const userNameSelect = (rootState) =>
  rootState.auth.register.userName || initialState.register.userName;

const phoneNumberSelect = (rootState) =>
  rootState.auth.register.phoneNumber || initialState.register.phoneNumber;

const representSelect = (rootState) =>
  rootState.auth.team_register.represent ||
  initialState.team_register.represent;

const groupNameSelect = (rootState) =>
  rootState.auth.team_register.groupName ||
  initialState.team_register.groupName;

export default authSlice;
export const { changeField, initializeForm, changeBtnState } =
  authSlice.actions;
export const emailSelector = createSelector(emailSelect, (email) => email);
export const passwordSelector = createSelector(
  passwordSelect,
  passwordConfirmSelect,
  (password, passwordConfirm) => ({ password, passwordConfirm }),
);
export const userNameSelector = createSelector(
  userNameSelect,
  (userName) => userName,
);
export const phoneNumberSelector = createSelector(
  phoneNumberSelect,
  (phoneNumber) => phoneNumber,
);

export const representSelector = createSelector(
  representSelect,
  (represent) => represent,
);

export const groupNameSelector = createSelector(
  groupNameSelect,
  (groupName) => groupName,
);
