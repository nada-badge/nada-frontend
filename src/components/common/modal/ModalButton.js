/** ModalButton 모달 가장 아래에 위치한 full 버튼 컴포넌트 */
import useModal from './useModal';
import { applyFontStyles } from '../../../styles/fontStyle';

export const ModalButton = ({ text }) => {
  const { closeModal } = useModal();

  const Close = {
    backgroundColor: 'var(--myspec-primaryblue-1)',
    borderRadius: '12px',
    height: '48px',
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
    width: '264px',
    textAlign: 'center',
    paddingTop: '11px',
  };

  const textStyle = applyFontStyles({
    font: 'subtitle-01',
    color: 'var(--myspec-gray-scalewhite)',
  });

  const close = () => {
    closeModal();
  };

  return (
    <div style={Close} onClick={close}>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default ModalButton;
