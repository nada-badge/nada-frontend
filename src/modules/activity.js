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
const activityNameSelect = (rootState) =>
  rootState.activity.activities.activityName ||
  initialState.activities.activityName;
const groupNameSelect = (rootState) =>
  rootState.activity.activities.groupName || initialState.activities.groupName;
const fieldSelect = (rootState) =>
  rootState.activity.activities.field || initialState.activities.field;
const categorySelect = (rootState) =>
  rootState.activity.activities.category || initialState.activities.category;
const areaSelect = (rootState) =>
  rootState.activity.activities.area || initialState.activities.area;
const contentSelect = (rootState) =>
  rootState.activity.activities.content || initialState.activities.content;
const startedAtSelect = (rootState) =>
  rootState.activity.activities.startedAt || initialState.activities.startedAt;
const endedAtSelect = (rootState) =>
  rootState.activity.activities.endedAt || initialState.activities.endedAt;
const registeredAtSelect = (rootState) =>
  rootState.activity.activities.registeredAt ||
  initialState.activities.registeredAt;
const updatedAtSelect = (rootState) =>
  rootState.activity.activities.updatedAt || initialState.activities.updatedAt;

//5) 리렌더링 시 함수의 불필요한 실행을 방지하기 위해 createSelector를 사용
export const idSelector = createSelector(idSelect, (_id) => _id);
export const activitySelector = createSelector(
  activityNameSelect,
  groupNameSelect,
  fieldSelect,
  categorySelect,
  areaSelect,
  contentSelect,
  startedAtSelect,
  endedAtSelect,
  registeredAtSelect,
  updatedAtSelect,
  (
    activityName,
    groupName,
    field,
    category,
    area,
    content,
    startedAt,
    endedAt,
    registeredAt,
    updatedAt,
  ) => ({
    activityName,
    groupName,
    field,
    category,
    area,
    content,
    startedAt,
    endedAt,
    registeredAt,
    updatedAt,
  }),
);
export default activitySlice;
export const { changeField, initializeForm } = activitySlice.actions;
