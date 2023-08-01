import { createSlice } from '@reduxjs/toolkit';

const initialState = { // 1) activity 값 초기화
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
    changeField: (state, { payload: { form, value } }) => {      // 2) form와 value를 전달받아 form의 값을 value로 변경
      state[form] = value;
    },
    initializeForm: (state, { payload: form }) => { // 3) 전달받은 form의 값 초기화
      state[form] = initialState[form];
    },
  },
});

export default scheduleSlice;
export const { changeField, initializeForm } = scheduleSlice.actions;