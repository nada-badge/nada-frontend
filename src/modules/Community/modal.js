/** modal 현재 선택된 모달의 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  type: null,
  title: null,
  content: null,
  act: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, title, content, act } = action.payload;
      state.type = type;
      state.title = title;
      state.content = content;
      state.act = act;
    },
    closeModal: (state, action) => {
      return initialState;
    },
  },
});

export const modalSelector = (state) => state.modal;
export const { openModal, closeModal } = modalSlice.actions;

const ModalPropsSelects = () => (rootState) => {
  return rootState.modal.props || initialState.props;
};

export const ModalPropsSelector = createSelector(
  ModalPropsSelects,
  (field) => field,
);
