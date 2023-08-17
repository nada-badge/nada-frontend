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

const emailSelect = (rootState) =>
  rootState.auth.personal_register.email ||
  initialState.personal_register.email;

const passwordSelect = (rootState) =>
  rootState.auth.personal_register.password ||
  initialState.personal_register.password;

const passwordConfirmSelect = (rootState) =>
  rootState.auth.personal_register.passwordConfirm ||
  initialState.personal_register.passwordConfirm;

const userNameSelect = (rootState) =>
  rootState.auth.personal_register.userName ||
  initialState.personal_register.userName;

const phoneNumberSelect = (rootState) =>
  rootState.auth.personal_register.phoneNumber ||
  initialState.personal_register.phoneNumber;

const representSelect = (rootState) =>
  rootState.auth.team_register.represent ||
  initialState.team_register.represent;

const groupNameSelect = (rootState) =>
  rootState.auth.team_register.groupName ||
  initialState.team_register.groupName;

const team_emailSelect = (rootState) =>
  rootState.auth.team_register.email || initialState.team_register.email;

const team_passwordSelect = (rootState) =>
  rootState.auth.team_register.password || initialState.team_register.password;

const team_passwordConfirmSelect = (rootState) =>
  rootState.auth.team_register.passwordConfirm ||
  initialState.team_register.passwordConfirm;

const team_phoneNumberSelect = (rootState) =>
  rootState.auth.team_register.phoneNumber ||
  initialState.team_register.phoneNumber;

export default authSlice;
export const { changeField, initializeForm, changeBtnState } =
  authSlice.actions;

export const emailSelector = (type) => {
  const typeMap = {
    team: createSelector(team_emailSelect, (email) => email),
    personal: createSelector(emailSelect, (email) => email),
  };
  return typeMap[type];
};

export const passwordSelector = (type) => {
  const typeMap = {
    team: createSelector(team_passwordSelect, (password) => password),
    personal: createSelector(passwordSelect, (password) => password),
  };
  return typeMap[type];
};

export const passwordConfirmSelector = (type) => {
  const typeMap = {
    team: createSelector(
      team_passwordConfirmSelect,
      (passwordConfirm) => passwordConfirm,
    ),
    personal: createSelector(
      passwordConfirmSelect,
      (passwordConfirm) => passwordConfirm,
    ),
  };
  return typeMap[type];
};

export const userNameSelector = createSelector(
  userNameSelect,
  (userName) => userName,
);
export const phoneNumberSelector = (type) => {
  const typeMap = {
    team: createSelector(team_phoneNumberSelect, (phoneNumber) => phoneNumber),
    personal: createSelector(phoneNumberSelect, (phoneNumber) => phoneNumber),
  };
  return typeMap[type];
};

export const representSelector = createSelector(
  representSelect,
  (represent) => represent,
);

export const groupNameSelector = createSelector(
  groupNameSelect,
  (groupName) => groupName,
);
