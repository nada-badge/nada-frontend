import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  buttonSelect: {
    maincategory: "모집",
    filter: undefined,
  },
  subButtonSelect: {
    area: ["전국"],
    field: ["전체"],
    category: ["전체"],
  },
};

const communitySlice = createSlice({
  name: "community",
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
    initializeAll: (state) => {
      return initialState;
    },
    initializeSub: (state) => {
      state.subButtonSelect = initialState.subButtonSelect;
    },
    initializeForm: (state, { payload: { form, key } }) => {
      state[form][key] = initialState[form][key];
    },
  },
});

export default communitySlice;
export const {
  setField,
  initializeForm,
  addField,
  deleteField,
  initializeAll,
  initializeSub,
} = communitySlice.actions;

const communitySelects = (type, field) => (rootState) => {
  return rootState.community[type][field] || initialState[type][field];
};

export const communitySelector = createSelector(
  communitySelects,
  (field) => field
);
