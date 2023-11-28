import styled from 'styled-components';
import { body_01, caption_02, subtitle_01 } from '../../styles/fontStyle';

const BadgeContainer = styled.div`
  display: flex;
  width: calc(120px - 12px);
  height: 120px;
  flex-direction: column;
  justify-content: center;

  & > .imgWrapper {
    display: flex;
    width: 100%;
    height: 120px;
    justify-content: center;
    align-items: center;
  }

  & > .textWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > .badgeType {
      ${caption_02('var(--myspec-gray-scale-gray-600, #888)')}
    }

    & > .title {
      width: inherit;
      ${subtitle_01('var(--myspec-gray-scale-gray-900, #1A1A1A)')}
    }

    & > .roleWrapper {
      width: inherit;
      display: flex;
      align-items: flex-start;
      gap: 4px;
      ${body_01('var(--myspec-gray-scale-gray-600, #888)')}
    }
  }
`;

export const BadgeItem = ({ card }) => {
  const { id, year, img_src, badgeType, title, team, role } = card;
  return (
    <BadgeContainer>
      <div className="imgWrapper" src={img_src} />
      <div className="textWrapper">
        <div className="badgeType"> {badgeType} </div>
        <div className="title"> {title}</div>
        <div className="roleWrapper">
          {team && <div className="team">{team}</div>}
          <div className="role">{role}</div>
        </div>
      </div>
    </BadgeContainer>
  );
};
