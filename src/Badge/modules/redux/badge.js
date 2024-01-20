import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  explain: '',
};

const badgeSlice = createSlice({
  name: 'badge',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    initialized: () => {
      return initialState;
    },
  },
});

export default badgeSlice;
export const { changeField, initialized } = badgeSlice.actions;
