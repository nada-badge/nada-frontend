import { createSlice, createSelector } from "@reduxjs/toolkit";

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
    changeField: (state, { payload: { form, value } }) => {
      state.community[form] = value;
    },
    initializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
    },
  },
});
const filterActiveSelect = (rootState) =>
  rootState.community.community.filterActive ||
  initialState.community.filterActive;

const categoryActiveSelect = (rootState) =>
  rootState.community.community.filterActive ||
  initialState.community.filterActive;

export const filterActiveSelector = createSelector(
  filterActiveSelect,
  (filterActive) => filterActive
);

export const categoryActiveSelector = createSelector(
  categoryActiveSelect,
  (categoryActive) => categoryActive
);

export default communitySlice;
export const { changeField, initializeForm } = communitySlice.actions;
