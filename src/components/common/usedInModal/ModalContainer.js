/** ModalContainer 모달을 관리하는 곳 */
import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/community/modal';
// Lazy 로딩할 모달 컴포넌트들
const MainCategoryModal = lazy(() =>
  import('../../community/PostWrite/MainCategoryModal'),
);
const ShareModal = lazy(() => import('../modal/ShareModal'));
const NoticeModal = lazy(() => import('../modal/NoticeModal'));
const AskModal = lazy(() => import('../modal/AskModal'));
const ButtonSelectModal = lazy(() => import('../modal/ButtonSelectModal'));
const MenuModal = lazy(() => import('../modal/MenuModal'));

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

  const Loading = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '288px',
    height: '100px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
  };

  const Overlay = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: '2',
  };

  const ModalWrap = {
    width: 'fit-content',
    maxWidth: '350px',
    height: 'fit-content',
    borderRadius: '20px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px 12px',
  };

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return createPortal(
    <>
      {/* Suspense를 사용하여 동적으로 로딩된 모달을 대기 */}
      <Suspense fallback={<div style={Loading}> Loading...</div>}>
        <div style={Overlay}>
          <div style={ModalWrap}>
            <Modal {...props} />
          </div>
        </div>
      </Suspense>
    </>,
    document.getElementById('modal'),
  );
};

export default ModalContainer;
