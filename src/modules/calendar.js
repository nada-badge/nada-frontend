import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: {
    date: '',
    events: '',
  },
};

const calendarSlice = createSlice({
  name: 'calendar',
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

export default calendarSlice;
export const { changeField, initializeForm } = calendarSlice.actions;
