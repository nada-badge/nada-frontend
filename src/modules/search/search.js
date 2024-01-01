import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeField: (state, { payload: { value } }) => {
      state.value = value;
    },
  },
});

export default searchSlice;
export const { changeField } = searchSlice.actions;

const searchSelect = (rootState) =>
  rootState.search?.value || initialState.value;
export const searchSelector = createSelector(searchSelect, (value) => ({
  value,
}));
