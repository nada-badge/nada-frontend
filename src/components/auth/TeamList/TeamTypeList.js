import TeamTypeItem from './TeamTypeItem';
import { Form, ListWrapper, TeamText } from '../../../styles/Register';

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
