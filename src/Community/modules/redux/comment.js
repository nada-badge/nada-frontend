/** comment 댓글과 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
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

const CommentSlice = createSlice({
  name: 'PostDetail',
  initialState,
  reducers: {
    changeField: (state, { payload: { form, value } }) => {
      state.Comment[form] = value;
    },
    initializeForm: (state) => {
      state.changeField = initialState.changeField;
    },
  },
});

export default CommentSlice;
export const { changeField, changePostDataField, initializeForm } =
  CommentSlice.actions;

const CommentSelects = (field) => (rootState) => {
  return rootState.comment[field] || initialState[field];
};

export const CommentSelector = createSelector(CommentSelects, (field) => field);
