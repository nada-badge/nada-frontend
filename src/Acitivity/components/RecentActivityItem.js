import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { Star } from '../../icon/Star';
import { Link } from 'react-router-dom';

const RecentActivityItem = ({ cards }) => {
  return (
    <>
      {cards.map(([_id, content]) => (
        <CardContainer key={_id}>
          <Link to={`/activity/DetailActivity/${_id}`}>
            <div>
              <div className="title">{content.title}</div>
              <div className="team">{content.team}</div>
              <div className="group">
                <div className="Dday">D {content.Dday}</div>
                <div className="see">조회 {content.views}</div>
              </div>
            </div>
          </Link>
          <Star className="star" _id={_id} /> {/* ◀ svg 파일 */}
        </CardContainer>
      ))}
    </>
  );
};

export default RecentActivityItem;

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 184px;
  height: 94px;

  &:hover {
    cursor: pointer;
  }

  & > a {
    text-decoration: none;
    display: inline-block;
    padding: 12px 14px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    position: relative;
    text-align: left;
  }

  & > svg {
    position: relative;
    top: calc(-24px - 10px);
    left: -12px;
    float: right;
  }

  & > a > div {
    & > .title {
      ${applyFontStyles({
        font: 'subtitle-03',
      })};
    }

    & > .team {
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-primaryblue-1)',
      })};
      padding-top: 4px;
    }

    & > .group {
      padding-top: 14px;
      display: flex;
      width: fit-content;
      gap: 4px;

      & :nth-child(1) {
        ${applyFontStyles({
          font: 'caption-01',
        })};
      }

      & :nth-child(2) {
        ${applyFontStyles({
          font: 'caption-01',
          color: 'var(--myspec-gray-scalegray-600)',
        })};
        overflow: visible;
      }

      & > div {
        align-self: center;
      }
    }
  }
`;
