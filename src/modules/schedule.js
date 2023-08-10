import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = { // 1) activity 값 초기화
  activities: {
    _id: '',
    scheduleName: '',          
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

const scheduleSlice = createSlice({
  name: 'schedule',
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

const idSelect = (rootState) => rootState.schedule.activities._id || initialState.activities._id;
const scheduleNameSelect = (rootState) => rootState.schedule.activities.scheduleName || initialState.activities.scheduleName;
const groupNameSelect = (rootState) => rootState.schedule.activities.groupName || initialState.activities.groupName;
const fieldSelect = (rootState) => rootState.schedule.activities.field || initialState.activities.field;
const categorySelect = (rootState) => rootState.schedule.activities.category || initialState.activities.category;
const areaSelect = (rootState) => rootState.schedule.activities.area || initialState.activities.area;
const contentSelect = (rootState) => rootState.schedule.activities.content || initialState.activities.content;
const startedAtSelect = (rootState) => rootState.schedule.activities.startedAt || initialState.activities.startedAt;
const endedAtSelect = (rootState) => rootState.schedule.activities.endedAt || initialState.activities.endedAt;
const registeredAtSelect = (rootState) => rootState.schedule.activities.registeredAt || initialState.activities.registeredAt;
const updatedAtSelect = (rootState) => rootState.schedule.activities.updatedAt || initialState.activities.updatedAt;

export const idSelector = createSelector(idSelect, (_id) => _id);
export const activitySelector = createSelector(
  scheduleNameSelect,
  groupNameSelect,
  fieldSelect,
  categorySelect,
  areaSelect,
  contentSelect,
  startedAtSelect,
  endedAtSelect,
  registeredAtSelect,
  updatedAtSelect,
  (scheduleName,groupName,field,category,area,content,startedAt,endedAt,registeredAt,updatedAt) => 
  ({ scheduleName,groupName,field,category,area,content,startedAt,endedAt,registeredAt,updatedAt }),);
export default scheduleSlice;
export const { changeField, initializeForm } = scheduleSlice.actions;