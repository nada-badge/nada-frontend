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
  issueList: [
    {
      name: '',
      role: '',
      birth: '',
      email: '',
      number: '',
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

    // add, delete
    addList: (state, { payload: { type, value } }) => {
      state[type] = [...state[type], value];
    },
    deleteList: (state, { payload: { type, index } }) => {
      state[type] = state[type].filter((_, i) => i !== index);
    },

    // change
    changeIndexField: (state, { payload: { type, index, name, value } }) => {
      if (state[type][index]) {
        state[type][index][name] = value;
      }
    },
    changeTeam: (state, { payload: { index, value } }) => {
      state.teams[index] = value;
    },
  },
});

export default badgeSlice;
export const {
  changeField,
  initialized,
  addList,
  deleteList,
  changeIndexField,
  addTeam,
  changeTeam,
} = badgeSlice.actions;
