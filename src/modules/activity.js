/* ManageActivity 관리자페이지 중 보여질 세부페이지의 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
const initialState = {
  method: {
    isSubmit: Boolean(),
  },
  activities: {
    _id: '',
    activityName: '',
    groupName: '',
    field: '',
    category: '',
    region: '',
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
    changeform: (state, { payload: { form, value } }) => {
      state[form] = value;
    },
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: { form } }) => {
      state[form] = initialState[form];
    },
  },
});

const selectActivity = (type, field) => (rootState) => {
  return rootState.activity[type][field] || initialState[type][field];
};

export const activitySelector = createSelector(
  selectActivity,
  (field) => field,
);

export default activitySlice;
export const { changeform, changeField, initializeForm } =
  activitySlice.actions;
