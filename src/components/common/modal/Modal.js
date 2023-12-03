/** Modal 기본 모달 */
import styled from 'styled-components';

function Modal({ children }) {
  return (
    <Overlay>
      <ModalWrap>
        <Contents>{children}</Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 288px;
  height: fit-content;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 16px 12px;
`;

export default Modal;
