/*barStatus 현재 보여지는 페이지의 하단, 상단바의 상태를 관리하는 리덕스  */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

/*headerState : 상단바 상태, text: 텍스트 출력시 텍스트 값 
headerState 상태값에 대하여는 컴플루언스-개발-프론트엔드개발-상단하단바관련을 참고해주세요.
*/
const initialState = {
  headerStatus: {
    headerState: 'bell',
    text: '무제',
  },
  bottomStatus: {
    isShowBottom: Boolean(),
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
    //한번에 상단, 하단 상태를 설정하기 위한 함수
    setBarStatus: (state, { payload: { headerState, text, isShowBottom } }) => {
      state.headerStatus.headerState = headerState;
      state.headerStatus.text = text;
      state.bottomStatus.isShowBottom = isShowBottom;
    },
    initializeForm: (state, { payload: form, key }) => {
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
