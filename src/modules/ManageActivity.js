/* ManageActivity 관리자페이지 중 보여질 세부페이지의 정보를 관리하는 리덕스 */
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
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
      state[form] = value;
    },
    initializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
    },
  },
});

const idSelect = (rootState) =>
  rootState.activity.activities._id || initialState.activities._id;
const selectActivity = (state) => state.activity.activities || initialState;

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
