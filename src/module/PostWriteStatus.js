import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  ButtonActive: {
    mainCategory: false,
    area: false,
    field: false,
    category: false,
  },
  postWriteSelect: {
    mainCategory: "카테고리",
    area: [],
    field: "",
    category: "",
  },
  postWriteSubmit: {
    mainCategory: "카테고리",
    area: [],
    field: "",
    category: "",
  },
};

const postWriteSlice = createSlice({
  name: "postWrite",
  initialState,
  reducers: {
    setField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    addField: (state, { payload: { form, key, value } }) => {
      state[form][key].push(value);
    },
    deleteField: (state, { payload: { form, key, value } }) => {
      const temp = state[form][key].filter((element) => element !== value);
      state[form][key] = temp;
    },
    initializeForm: (state, { payload: { form, key } }) => {
      state[form][key] = initialState[form][key];
    },
    submitForm: (state, { payload: { key } }) => {
      state.postWriteSubmit[key] = state.postWriteSelect[key];
    },
  },
});

export default postWriteSlice;
export const { addField, deleteField, initializeForm, submitForm, setField } =
  postWriteSlice.actions;

const postWriteSelects = (type, field) => (rootState) => {
  return rootState.postwrite[type][field] || initialState[type][field];
};

export const postWriteSelector = createSelector(
  postWriteSelects,
  (field) => field
);
