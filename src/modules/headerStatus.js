import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  // 1) activity 값 초기화
  headerStatus: {
    pageStatus: 'notice-menu',
    pageNameStatus: '메롱메롱',
  },
};

const headerStatusSlice = createSlice({
  name: 'headerStatus',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    initializeForm: (state, { payload: form }) => {
      // 3) 전달받은 form의 값 초기화
      state[form] = initialState[form];
    },
  },
});

//4)createSelector를 위한 준비
const pageStatusSelect = (rootState) =>
  rootState.headerStatus.headerStatus.pageStatus ||
  initialState.headerStatus.pageStatus;
const pageNameStatusSelect = (rootState) =>
  rootState.headerStatus.headerStatus.pageNameStatus ||
  initialState.headerStatus.pageNameStatus;

//5) 리렌더링 시 함수의 불필요한 실행을 방지하기 위해 createSelector를 사용
export const headerStatusSelector = createSelector(
  pageStatusSelect,
  pageNameStatusSelect,
  (pageStatus, pageNameStatus) => ({ pageStatus, pageNameStatus }),
);

export default headerStatusSlice;
export const { changeField, initializeForm } = headerStatusSlice.actions;
