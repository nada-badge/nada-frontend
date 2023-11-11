import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  PostDetail: {
    _id: "",
    userEmail: "",
    userName: "",
    mainCategory: "",
    category: "",
    field: [],
    area: [],
    title: "",
    content: "",
    comments: "",
    views: "",
    reports: "",
    registeredAt: "",
    updatedAt: "",
  },
  Comment: {
    isReply: Boolean(false),
    _id: "",
  },
};

const PostDetailSlice = createSlice({
  name: "PostDetail",
  initialState,
  reducers: {
    changePostDetailField: (state, { payload: { value } }) => {
      // 2) form와 value를 전달받아 form의 값을 value로 변경
      state.PostDetail = value;
    },
    changeCommentField: (state, { payload: { form, value } }) => {
      // 2) form와 value를 전달받아 form의 값을 value로 변경
      state.Comment[form] = value;
    },
    initializeForm: (state) => {
      // 3) 전달받은 form의 값 초기화
      state.PostDetail = initialState.PostDetail;
    },
  },
});

export default PostDetailSlice;
export const { changePostDetailField, changeCommentField, initializeForm } =
  PostDetailSlice.actions;

const PostDetailSelects = (type, field) => (rootState) => {
  return rootState.postdetail[type][field] || initialState[type][field];
};

export const PostDetailSelector = createSelector(
  PostDetailSelects,
  (field) => field
);

const selectPostDetail = (state) => state.PostDetail.PostDetail || initialState;

export const PostDetailsSelector = createSelector(
  selectPostDetail,
  (PostDetail) => ({
    _id: PostDetail._id,
    userEmail: PostDetail.userEmail,
    userName: PostDetail.userName,
    mainCategory: PostDetail.mainCategory,
    cateegory: PostDetail.cateegory,
    field: PostDetail.field,
    area: PostDetail.area,
    title: PostDetail.title,
    content: PostDetail.content,
    comments: PostDetail.comments,
    views: PostDetail.views,
    reports: PostDetail.reports,
    registeredAt: PostDetail.registeredAt,
    updatedAt: PostDetail.updatedAt,
  })
);
