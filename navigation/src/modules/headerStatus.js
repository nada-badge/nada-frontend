import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = { // 1) activity 값 초기화
  headerStatus: {
    logoStatus: '',
    backStatus: '',          
    pageNameStatus: '메롱메롱',    
    alarmStatus: '',      
    menuStatus: '',         
  },
};

const headerStatusSlice = createSlice({
  name: 'headerStatus',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, value } }) => {      // 2) form와 value를 전달받아 form의 값을 value로 변경
      state[form] = value;
    },
    initializeForm: (state, { payload: form }) => { // 3) 전달받은 form의 값 초기화
      state[form] = initialState[form];
    },
  },
});

//4)createSelector를 위한 준비
const logoStatusSelect = (rootState) => rootState.headerStatus.headerStatus.logoStatus || initialState.headerStatus.logoStatus;
const backStatusSelect = (rootState) => rootState.headerStatus.headerStatus.backStatus || initialState.headerStatus.backStatus;
const pageNameStatusSelect = (rootState) => rootState.headerStatus.headerStatus.pageNameStatus || initialState.headerStatus.pageNameStatus;
const alarmStatusSelect = (rootState) => rootState.headerStatus.headerStatus.alarmStatus || initialState.headerStatus.alarmStatus;
const menuStatusSelect = (rootState) => rootState.headerStatus.headerStatus.menuStatus || initialState.headerStatus.menuStatus;



//5) 리렌더링 시 함수의 불필요한 실행을 방지하기 위해 createSelector를 사용
export const headerStatusSelector = createSelector(
    logoStatusSelect,
    backStatusSelect,
    pageNameStatusSelect,
    alarmStatusSelect,
    menuStatusSelect,
  (logoStatus, backStatus, pageNameStatus, alarmStatus, menuStatus) => 
  ({ logoStatus, backStatus, pageNameStatus, alarmStatus, menuStatus }),);

export default headerStatusSlice;
export const { changeField, initializeForm } = headerStatusSlice.actions;