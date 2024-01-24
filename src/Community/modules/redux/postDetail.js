/** postDetail 커뮤니티 세부 페이지와 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  PostData: {
    data: {},
  },
};

const PostDetailSlice = createSlice({
  name: 'PostDetail',
  initialState,
  reducers: {
    changePostDataField: (state, { payload: { value } }) => {
      state.PostData.data = value;
    },
    initializeForm: (state) => {
      state.PostData = initialState.PostData;
    },
  },
});

export default PostDetailSlice;
export const { changePostDataField, initializeForm } = PostDetailSlice.actions;

const PostDetailSelects = (type, field) => (rootState) => {
  return rootState.postdetail[type][field] || initialState[type][field];
};

export const PostDetailSelector = createSelector(
  PostDetailSelects,
  (field) => field,
);
