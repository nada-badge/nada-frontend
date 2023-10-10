import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  community: {
    filterActive: "",
    categoryActive: "",
  },
};

const communitySlice = createSlice({
  name: "community",
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

export default communitySlice;
export const { changeField, initializeForm } = communitySlice.actions;

const communitySelects = (type, field) => (rootState) => {
  return rootState.community[type][field] || initialState[type][field];
};

export const communitySelector = createSelector(
  communitySelects,
  (field) => field
);
