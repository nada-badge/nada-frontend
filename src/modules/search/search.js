import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  focus: '제목',
  text: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
});

export default searchSlice;
export const { changeField } = searchSlice.actions;

const searchSelect = (state) => state.search || initialState;

export const searchSelector = createSelector(searchSelect, (field) => ({
  text: field.text,
  focus: field.focus,
}));
