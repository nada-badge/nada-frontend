import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  // 1) activity 값 초기화
  activities: {
    _id: '',
    activityName: '',
    groupName: '',
    field: '',
    category: '',
    area: '',
    content: '',
    startedAt: '',
    endedAt: '',
    registeredAt: '',
    updatedAt: '',
  },
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, value } }) => {
      // 2) form와 value를 전달받아 form의 값을 value로 변경
      state[form] = value;
    },
    initializeForm: (state, { payload: form }) => {
      // 3) 전달받은 form의 값 초기화
      state[form] = initialState[form];
    },
  },
});

//4)createSelector를 위한 준비
const idSelect = (rootState) =>
  rootState.activity.activities._id || initialState.activities._id;
const selectActivity = (state) => state.activity.activities || initialState;

//5) 리렌더링 시 함수의 불필요한 실행을 방지하기 위해 createSelector를 사용
export const idSelector = createSelector(idSelect, (_id) => _id);
export const activitySelector = createSelector(selectActivity, (activity) => ({
  activityName: activity.activityName,
  groupName: activity.groupName,
  field: activity.field,
  category: activity.category,
  area: activity.area,
  content: activity.content,
  startedAt: activity.startedAt,
  endedAt: activity.endedAt,
  registeredAt: activity.registeredAt,
  updatedAt: activity.updatedAt,
}));

export default activitySlice;
export const { changeField, initializeForm } = activitySlice.actions;
