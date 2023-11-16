/** modal 현재 선택된 모달의 정보를 관리하는 리덕스 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  props: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, props } = action.payload;
      state.type = type;
      state.props = props;
    },
    closeModal: (state, action) => {
      return initialState;
    },
  },
});

export const modalSelector = (state) => state.modal;
export const { openModal, closeModal } = modalSlice.actions;
