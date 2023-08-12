import styled from 'styled-components';
import TeamTypeItem from './TeamTypeItem';
import { Form } from '../../../styles/Register';

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

//list
const ListWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  left: 0;
`;

const Title = styled.div`
  color: #000000;
  font-family: var(--title-01-font-family);
  font-size: var(--title-01-font-size);
  font-style: var(--title-01-font-style);
  font-weight: var(--title-01-font-weight);
  height: 27px;
  letter-spacing: var(--title-01-letter-spacing);
  line-height: var(--title-01-line-height);
  white-space: nowrap;
  position: relative;
`;

const TeamTypeList = () => {
  return (
    <Form>
      <div>
        <Title>학생 조직</Title>
        <ListWrapper>
          {StudentTeam.map((team) => (
            <TeamTypeItem team={team} key={team.id} />
          ))}
        </ListWrapper>

        <Title>기관</Title>
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
