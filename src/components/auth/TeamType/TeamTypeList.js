import TeamTypeItem from './TeamTypeItem';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

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

const TeamTypeList = () => {
  const [teamType, setTeamType] = useState([
    { id: 11, text: '교내 동아리', checked: false },
    { id: 12, text: '연합 동아리', checked: false },
    { id: 13, text: '학회', checked: false },
    { id: 14, text: '학과', checked: false },
    { id: 15, text: '학생회', checked: false },
    { id: 21, text: '공공기관', checked: false },
    { id: 22, text: '사기업', checked: false },
  ]);

  const onClick = useCallback(
    (id) => {
      setTeamType(
        teamType.map((team) =>
          id === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
    },
    [teamType],
  );

  return (
    <div>
      <div>
        <TeamText>학생 조직</TeamText>
        <ListWrapper>
          {teamType.map(
            (team) =>
              team.id < 20 && (
                <TeamTypeItem team={team} key={team.id} onClick={onClick} />
              ),
          )}
        </ListWrapper>
      </div>

      <div>
        <TeamText>기관</TeamText>
        <ListWrapper>
          {teamType.map(
            (team) =>
              team.id > 20 && (
                <TeamTypeItem team={team} key={team.id} onClick={onClick} />
              ),
          )}
        </ListWrapper>
      </div
    </div>
  );
};

export default TeamTypeList;
