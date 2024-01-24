/** postDetail 커뮤니티 세부 페이지와 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  PostData: {
    data: {},
  },
  Comment: {
    position: 'comment',
    post_id: '',
    comment_id: '',
    reply_id: '',
    userName: '',
    content: '',
    isReplying: Boolean(false),
    isUpdating: Boolean(false),
  },
};

const PostDetailSlice = createSlice({
  name: 'PostDetail',
  initialState,
  reducers: {
    changeCommentField: (state, { payload: { form, value } }) => {
      state.Comment[form] = value;
    },
    changePostDataField: (state, { payload: { value } }) => {
      state.PostData.data = value;
    },
    initializeForm: (state, { payload: { form } }) => {
      state[form] = initialState[form];
    },
  },
});

export default PostDetailSlice;
export const { changeCommentField, changePostDataField, initializeForm } =
  PostDetailSlice.actions;

const PostDetailSelects = (type, field) => (rootState) => {
  return rootState.postdetail[type][field] || initialState[type][field];
};

export const PostDetailSelector = createSelector(
  PostDetailSelects,
  (field) => field,
);
