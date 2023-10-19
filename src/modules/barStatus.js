import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  // 1) activity 값 초기화
  headerStatus: {
    pageStatus: 'bell',
    pageNameStatus: '무제',
  },
  bottomStatus: {
    bottomActive: Boolean(),
  },
};

const barStatusSlice = createSlice({
  name: 'barStatus',
  initialState,
  reducers: {
    changeHeader: (state, { payload: { key, value } }) => {
      state.headerStatus[key] = value;
    },
    changeBottom: (state, { payload: { key, value } }) => {
      state.bottomStatus[key] = value;
    },
    setBarStatus: (state, { payload: { header, name, bottom } }) => {
      state.headerStatus.pageStatus = header;
      state.headerStatus.pageNameStatus = name;
      state.bottomStatus.bottomActive = bottom;
    },
    initializeForm: (state, { payload: form, key }) => {
      // 2) 전달받은 form의 값 초기화
      state[form][key] = initialState[form][key];
    },
  },
});

export default barStatusSlice;
export const { changeHeader, changeBottom, setBarStatus, initializeForm } =
  barStatusSlice.actions;

const barStatusSelects = (type, field) => (rootState) => {
  return rootState.barStatus[type][field] || initialState[type][field];
};

export const barStatusSelector = createSelector(
  barStatusSelects,
  (field) => field,
);
