import { TitleBox } from '../../../styles/Survey';
import { useDispatch, useSelector } from 'react-redux';
import IssueListInputItem from '../../components/IssueListInputItem';
import { ButtonContainer } from './ActivityForm';
import {
  Act,
  Cancel,
} from '../../../Modal/components/usedInModal/ModalButtonDiv';
import { addList } from '../../modules/redux/badge';

const PeopleForm = ({ onSubmit }) => {
  const issueList = useSelector(({ badge }) => badge.issueList);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      addList({
        type: 'issueList',
        value: { name: '', role: '', birth: '', email: '', number: '' },
      }),
    );
  };

  return (
    <>
      <TitleBox>
        발급 받을 사람의
        <br />
        정보를 입력해 주세요
      </TitleBox>

      <div
        style={{
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {issueList.map((el, index) => (
          <IssueListInputItem key={index} content={el} index={index} />
        ))}
      </div>

      <ButtonContainer>
        <Cancel onClick={() => onClick()}>
          <div className="text">발급자 추가하기</div>
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

export default PeopleForm;
