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
import { addActivities } from '../../modules/redux/badge';

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
  const activities = useSelector(({ badge }) => badge.activities);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addActivities({ content: '', started: '', end: '' }));
  };

  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        {activities.map((el, index) => (
          <ActivityInputItem key={index} content={el} index={index} />
        ))}
      </form>
      <ButtonContainer>
        <Cancel onClick={() => onClick()}>
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
