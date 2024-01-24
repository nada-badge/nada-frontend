// 활동 이력을 입력받는 컨테이너
import { TitleBox } from '../../../styles/Survey';
import ActivityInputItem from '../../components/ActivityInputItem';
import {
  ButtonList,
  Cancel,
  Act,
} from '../../../Modal/components/usedInModal/ModalButtonDiv';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../modules/redux/badge';

export const ButtonContainer = styled(ButtonList)`
  width: 100%;
  align-items: end;
  bottom: 50px;

  & > div {
    height: fit-content;
    & > .text {
      ${applyFontStyles({ font: 'title-01' })}
    }
  }
`;

const ActivityForm = ({ onSubmit, order, dispatchField }) => {
  const activities = useSelector(({ badge }) => badge.activities);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      addList({
        type: 'activities',
        value: { content: '', started: '', end: '' },
      }),
    );
  };

  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {activities.map((el, index) => (
            <ActivityInputItem key={index} content={el} index={index} />
          ))}
        </div>
      </div>
      <ButtonContainer>
        <Cancel onClick={() => onClick()}>
          <div className="text">내역 추가하기</div>
        </Cancel>
        <Act onClick={onSubmit}>
          <div className="text" style={{ color: 'white' }}>
            다음
          </div>
        </Act>
      </ButtonContainer>
    </>
  );
};

export default ActivityForm;
