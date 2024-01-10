/** modal 현재 선택된 모달의 정보를 관리하는 리덕스 */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  type: null,
  contentType: null,
  actionType: null,
  content: null,
  position: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, contentType, actionType, content, position } =
        action.payload;
      state.type = type;
      state.contentType = contentType;
      state.actionType = actionType;
      state.content = content;
      state.position = position;
    },
    closeModal: () => {
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
