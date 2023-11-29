/** ModalContainer 모달을 관리하는 곳 */
import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';

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

function ModalContainer() {
  const { type, props } = useSelector(modalSelector);

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return createPortal(
    <>
      {/* Suspense를 사용하여 동적으로 로딩된 모달을 대기 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Modal {...props} />
      </Suspense>
    </>,
    document.getElementById('modal'),
  );
}

export default ModalContainer;
