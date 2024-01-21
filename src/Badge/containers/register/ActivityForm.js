import { TitleBox } from '../../../styles/Survey';
import ActivityInputItem from '../../components/ActivityInputItem';
import {
  ButtonList,
  Cancel,
  Act,
} from '../../../Modal/components/usedInModal/ModalButtonDiv';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';

const ButtonContainer = styled(ButtonList)`
  width: 100%;
  & > div {
    height: fit-content;
    & > .text {
      ${applyFontStyles({ font: 'title-01' })}
    }
  }
`;

const ActivityForm = ({ onSubmit, order, dispatchField }) => {
  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <ActivityInputItem />
      </form>
      <ButtonContainer>
        <Cancel>
          <div className="text">내역 추가하기</div>
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

export default ActivityForm;
