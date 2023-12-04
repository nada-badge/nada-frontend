/** ModalButton 모달 가장 아래에 위치한 full 버튼 컴포넌트 */
import useModal from './useModal';
import styled from 'styled-components';
import { subtitle_01 } from '../../../styles/fontStyle';

export const ModalButton = (text) => {
  const { closeModal } = useModal();

  return (
    <Close onClick={closeModal()}>
      <div className="text-wrapper">{text}</div>
    </Close>
  );
};

export default ModalButton;

export const Close = styled.div`
  background-color: var(--myspec-primaryblue-1);
  border-radius: 12px;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 264px;

  & > .text-wrapper {
    ${subtitle_01('var(--myspec-gray-scalewhite)')}
    left: 117px;
    position: absolute;
    text-align: center;
    top: 11px;
    white-space: nowrap;
  }
`;
