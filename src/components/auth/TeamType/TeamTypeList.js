import TeamTypeItem from './TeamTypeItem';
import { Form } from '../../../styles/Register';
import styled from 'styled-components';

const ListWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
`;

const TeamText = styled.div`
  color: #000000;
  font-family: var(--title-01-font-family);
  font-size: var(--title-01-font-size);
  font-style: var(--title-01-font-style);
  font-weight: var(--title-01-font-weight);
  letter-spacing: var(--title-01-letter-spacing);
  line-height: var(--title-01-line-height);
  white-space: nowrap;
  position: relative;
`;

const StudentTeam = [
  { id: 11, text: '교내 동아리', checked: false },
  { id: 12, text: '연합 동아리', checked: false },
  { id: 13, text: '학회', checked: false },
  { id: 14, text: '학과', checked: false },
  { id: 15, text: '학생회', checked: false },
];

const Institute = [
  { id: 21, text: '공공기관', checked: false },
  { id: 22, text: '사기업', checked: false },
];

const TeamTypeList = () => {
  return (
    <Form>
      <div>
        <TeamText>학생 조직</TeamText>
        <ListWrapper>
          {StudentTeam.map((team) => (
            <TeamTypeItem team={team} key={team.id} />
          ))}
        </ListWrapper>
      </div>

      <div>
        <TeamText>기관</TeamText>
        <ListWrapper>
          {Institute.map((team) => (
            <TeamTypeItem team={team} key={team.id} />
          ))}
        </ListWrapper>
      </div>
    </Form>
  );
};

export default TeamTypeList;
