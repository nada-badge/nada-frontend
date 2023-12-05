import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: {
    date: '',
    events: '',
  },
};

const modalEventSlice = createSlice({
  name: 'modalEvent',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      state.day[key] = value;
    },
    initializeForm: (state) => {
      state = initialState;
    },
  },
});

export default modalEventSlice;
export const { changeField, initializeForm } = modalEventSlice.actions;
