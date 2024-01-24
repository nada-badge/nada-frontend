/** postDetail 커뮤니티 세부 페이지와 관련된 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  PostData: {
    data: {},
  },
  PostDetail: {
    _id: '',
  },
  Comment: {
    position: 'comment',
    userName: '',
    content: '',
    _id: '',
    reply_id: '',
    isReplying: Boolean(false),
    isUpdating: Boolean(false),
  },
};

const PostDetailSlice = createSlice({
  name: 'PostDetail',
  initialState,
  reducers: {
    changePostDetailField: (state, { payload: { value } }) => {
      state.PostDetail = value;
    },
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
export const {
  changePostDetailField,
  changeCommentField,
  changePostDataField,
  initializeForm,
} = PostDetailSlice.actions;

const PostDetailSelects = (type, field) => (rootState) => {
  return rootState.postdetail[type][field] || initialState[type][field];
};

export const PostDetailSelector = createSelector(
  PostDetailSelects,
  (field) => field,
);
