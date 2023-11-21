/** ModalButtonDiv 모달 가장 아래에 위치한 'divide' 버튼 컴포넌트 */
import styled from 'styled-components';
import classNames from 'classnames';
import { subtitle_01, subtitle_02 } from '../../../styles/fontStyle';

export const ModalButtonDiv = ({ cancelText, cancel, actText, act, isRed }) => {
  return (
    <ButtonList>
      <div className="cancel" onClick={() => cancel()}>
        <div className="text">{cancelText}</div>
      </div>
      <div className={classNames('act', { isRed })} onClick={() => act()}>
        <div className="text">{actText}</div>
      </div>
    </ButtonList>
  );
};

export default ModalButtonDiv;

export const ButtonList = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;

  & > .cancel {
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 10px;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 128px;
    & > .text {
      ${subtitle_02('var(--myspec-gray-scalegray-900)')}
      left: 49px;
      position: absolute;
      text-align: center;
      top: 11px;
    }
  }

  & > .act {
    border-radius: 10px;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 128px;
    display: flex;
    background-color: var(--myspec-primaryblue-1);
    &.isRed {
      background-color: var(--myspec-primaryred-1);
    }
    & > .text {
      ${subtitle_01('var(--myspec-gray-scalegray-100)')}
      position: relative;
      width: 128px;
      top: 11px;
      text-align: center;
    }
  }
`;
