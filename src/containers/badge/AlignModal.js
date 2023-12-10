import { useCallback, useRef } from 'react';
import { ModalBackGround } from '../../styles/calendar/index';

export const AlignModal = ({ align, closeModal }) => {
  const Modal = {
    display: 'inline-flex',
    padding: '16px 12px',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'var(--myspec-grayscale-white, #FFF)',
  };
  const outside = useRef();

  const onClick = useCallback((e) => {
    if (e.target === outside.current) {
      closeModal();
    }
  });

  return (
    <ModalBackGround ref={outside} onClick={onClick}>
      <div style={Modal}>{align}</div>
    </ModalBackGround>
  );
};
