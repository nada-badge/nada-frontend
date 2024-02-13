import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  explain: '',
  shape: {
    index: '',
    src: '',
  },
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
      team: '',
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

    // team or notTeam
    changeIssueListFormat: (state) => {
      state.issueList = state.teams.map((team) => [
        {
          name: '',
          role: '',
          birth: '',
          email: '',
          number: '',
          team: team,
        },
      ]);
    },

    changeIssueList: (state, { payload: { index, name, teamName, value } }) => {
      let idx = state.teams.indexOf(teamName);
      if (state.issueList[idx]) {
        state.issueList[idx][index][name] = value;
      }
    },

    addIssueList: (state, { payload: { teamName, value } }) => {
      const idx = state.teams.indexOf(teamName);
      if (state.issueList[idx]) {
        state.issueList[idx].push(value); // 값 추가
      }
    },

    deleteIssueList: (state, { payload: { teamName, index } }) => {
      let idx = state.teams.indexOf(teamName);
      state.issueList[idx] = state.issueList[idx].filter((_, i) => i !== index);
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
  changeIssueListFormat,
  changeIssueList,
  addIssueList,
  deleteIssueList,
} = badgeSlice.actions;
