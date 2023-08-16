import TeamTypeItem from './TeamTypeItem';
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

const TeamTypeList = ({ teamType, onClick }) => {
  return (
    <div>
      <div>
        <TeamText>학생 조직</TeamText>
        <ListWrapper>
          {teamType.map(
            (team) =>
              team.id < 20 && (
                <TeamTypeItem
                  team={team}
                  key={team.id}
                  onClick={() => {
                    onClick(team.id);
                  }}
                />
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
                <TeamTypeItem
                  team={team}
                  key={team.id}
                  onClick={() => {
                    onClick(team.id);
                  }}
                />
              ),
          )}
        </ListWrapper>
      </div>
    </div>
  );
};

export default TeamTypeList;
