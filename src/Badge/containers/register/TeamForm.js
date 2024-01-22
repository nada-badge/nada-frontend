// 뱃지에 대한 설명을 입력받는 컨테이너
import { Explain, TitleBox } from '../../../styles/Survey';
import { AddOperator } from '../../../icon/AddOperator';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';
import { ButtonContainer } from './ActivityForm';
import {
  Cancel,
  Act,
} from '../../../Modal/components/usedInModal/ModalButtonDiv';

const ButtonWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  height: fit-content;
  align-items: center;
  border-radius: 10px;
  padding: 12px 13px;
  background: var(--myspec-gray-scalegray-100, #f2f2f2);
  gap: 8px;
  ${applyFontStyles({ font: 'body-02', color: 'var(--myspec-primaryblue-1)' })}
`;

const TeamForm = ({ onSubmit, order, dispatchField }) => {
  return (
    <>
      <TitleBox>
        팀을 추가해 주세요
        <Explain>
          뱃지 안에서 팀을 나누고 팀 별로 발급할 수 있어요
          <br />
          팀이 없다면 건너뛰기를 눌러주세요
        </Explain>
      </TitleBox>
      <ButtonWrapper>
        <AddOperator color={'var(--myspec-primaryblue-1)'} />
        <span> 팀 추가하기 </span>
      </ButtonWrapper>
      <ButtonContainer>
        <Cancel onClick={() => {}}>
          <div className="text">건너뛰기</div>
        </Cancel>
        <Act>
          <div className="text" style={{ color: 'white' }}>
            다음
          </div>
        </Act>
      </ButtonContainer>
    </>
  );
};

export default TeamForm;
