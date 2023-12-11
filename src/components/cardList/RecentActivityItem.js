import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { Star } from '../activity/Star';
import { Link } from 'react-router-dom';

const RecentActivityItem = ({ cards }) => {
  return (
    <>
      {cards.map(({ _id, title, team, Dday, see }) => (
        <CardContainer key={_id}>
          <Link to={`/activity/${_id}`}>
            <div>
              <div className="title">{title}</div>
              <div className="team">{team}</div>
              <div className="group">
                <div className="Dday">D-{Dday}</div>
                <div className="see">조회 {see}</div>
              </div>
              <Star className="star" /> {/* ◀ svg 파일 */}
            </div>
          </Link>
        </CardContainer>
      ))}
    </>
  );
};

export default RecentActivityItem;

const CardContainer = styled.div`
  box-sizing: border-box;
  min-width: 184px;
  height: 94px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  position: relative;
  text-align: left;
  padding: 10px;

  & > a {
    text-decoration: none;
  }

  & > a > div {
    & > .title {
      ${applyFontStyles({
        font: 'subtitle-03',
      })};
      position: relative;
    }

    & > .team {
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-primaryblue-1)',
      })};
      position: relative;
      top: 4px;
    }

    & > .group {
      height: 24px;
      position: relative;
      top: 14px;
      display: flex;
      width: fit-content;
      gap: 4px;
      ${applyFontStyles({
        font: 'caption-01',
      })};

      & > div {
        align-self: center;
      }
    }

    & > svg {
      position: relative;
      top: -12px;
      left: calc(100% - 24px); // 전체 넓이 - 아이콘 크기(본인)
      z-index: 2;
    }
  }
`;
