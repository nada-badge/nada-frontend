import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: {
    _id: '',
    scheduleName: '',      
    groupId: '',      
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
    changeField: (state, { payload: { form, value } }) => {      
      state[form] = value;
    },
    initializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
    },
  },
});

export default scheduleSlice;
export const { changeField, initializeForm } = scheduleSlice.actions;