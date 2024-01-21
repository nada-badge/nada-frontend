import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  explain: '',
  activities: [
    {
      content: '',
      started: '',
      ended: '',
    },
  ],
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
    addActivities: (state, { payload: value }) => {
      state.activities = [...state.activities, value];
    },
    deleteActivities: (state, { payload: index }) => {
      state.activities = state.activities.filter((_, i) => i !== index);
    },
  },
});

export default badgeSlice;
export const { changeField, initialized, addActivities, deleteActivities } =
  badgeSlice.actions;
