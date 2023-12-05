/** ModalContainer 모달을 관리하는 곳 */
import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/community/modal';
import styled from 'styled-components';
// Lazy 로딩할 모달 컴포넌트들
const MainCategoryModal = lazy(() =>
  import('../../community/PostWrite/MainCategoryModal'),
);
const ShareModal = lazy(() => import('./ShareModal'));
const NoticeModal = lazy(() => import('./NoticeModal'));
const AskModal = lazy(() => import('./AskModal'));
const ButtonSelectModal = lazy(() => import('./ButtonSelectModal'));
const MenuModal = lazy(() => import('./MenuModal'));

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  ShareModal: ShareModal,
  NoticeModal: NoticeModal,
  AskModal: AskModal,
  MenuModal: MenuModal,
  ButtonSelectModal: ButtonSelectModal,
};

const ModalContainer = () => {
  const { type, props } = useSelector(modalSelector);

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return createPortal(
    <>
      {/* Suspense를 사용하여 동적으로 로딩된 모달을 대기 */}
      <Suspense fallback={<Loading> Loading...</Loading>}>
        <Modal {...props} />
      </Suspense>
    </>,
    document.getElementById('modal'),
  );
};

export default ModalContainer;

const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 288px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
