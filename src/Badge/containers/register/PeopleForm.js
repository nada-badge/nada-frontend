import { TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';
import IssueListInputItem from '../../components/IssueListInputItem';

const PeopleForm = ({}) => {
  const issueList = useSelector(({ badge }) => badge.issueList);

  return (
    <>
      <TitleBox>
        발급 받을 사람의
        <br />
        정보를 입력해 주세요
      </TitleBox>

      <div style={{ overflowY: 'scroll' }}>
        {issueList.map((el, index) => (
          <IssueListInputItem key={index} content={el} index={index} />
        ))}
      </div>
    </>
  );
};

export default PeopleForm;
