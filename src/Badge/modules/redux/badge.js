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
  teams: [],
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
    addActivity: (state, { payload: value }) => {
      state.activities = [...state.activities, value];
    },
    deleteActivity: (state, { payload: index }) => {
      state.activities = state.activities.filter((_, i) => i !== index);
    },
    changeActivity: (state, { payload: { index, name, value } }) => {
      if (state.activities[index]) {
        state.activities[index][name] = value;
      }
    },
    addTeam: (state, { payload: value }) => {
      state.teams = [...state.teams, value];
    },
    deleteTeam: (state, { payload: index }) => {
      state.teams = state.teams.filter((_, i) => i !== index);
    },
  },
});

export default badgeSlice;
export const {
  changeField,
  initialized,
  addActivity,
  deleteActivity,
  changeActivity,
  addTeam,
  deleteTeam,
} = badgeSlice.actions;
