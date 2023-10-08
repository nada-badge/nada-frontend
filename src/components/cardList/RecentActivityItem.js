import styled from 'styled-components';

const CardContainer = styled.div`
  min-width: 184px;
  height: 94px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  position: relative;

  & > div {
    width: 160px;
    position: relative;
    left: 14px;
    top: 10px;

    & > .title {
      color: var(--gray-900);
      font-family: var(--subtitle-03-font-family);
      font-size: var(--subtitle-03-font-size);
      font-style: var(--subtitle-03-font-style);
      font-weight: var(--subtitle-03-font-weight);
      height: 21px;
      letter-spacing: var(--subtitle-03-letter-spacing);
      line-height: var(--subtitle-03-line-height);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      position: relative;
    }

    & > .team {
      color: var(--myspec-primaryblue-1);
      font-family: var(--caption-02-font-family);
      font-size: var(--caption-02-font-size);
      font-style: var(--caption-02-font-style);
      font-weight: var(--caption-02-font-weight);
      height: 14px;
      letter-spacing: var(--caption-02-letter-spacing);
      line-height: var(--caption-02-line-height);
      position: relative;
      top: 4px;
      white-space: nowrap;
      width: calc(100% - (16px + 14px));
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > .group {
      height: 24px;
      position: relative;
      top: 14px;
      display: flex;
      width: fit-content;

      & > .Dday {
        color: var(--myspec-gray-scalegray-900);
        font-family: var(--caption-01-font-family);
        font-size: var(--caption-01-font-size);
        font-style: var(--caption-01-font-style);
        font-weight: var(--caption-01-font-weight);
        height: 17px;
        letter-spacing: var(--caption-01-letter-spacing);
        line-height: var(--caption-01-line-height);
        position: relative;
        white-space: nowrap;
        align-self: center;
      }

      & > .see {
        color: var(--myspec-gray-scalegray-600);
        font-family: var(--caption-01-font-family);
        font-size: var(--caption-01-font-size);
        font-style: var(--caption-01-font-style);
        font-weight: var(--caption-01-font-weight);
        height: 17px;
        letter-spacing: var(--caption-01-letter-spacing);
        line-height: var(--caption-01-line-height);
        position: relative;
        left: 4px;
        text-align: center;
        white-space: nowrap;
        align-self: center;
      }
    }
    
    & > .star {
      background-image: url(https://c.animaapp.com/ZKBJFlPD/img/star-1-2.svg);
      background-size: 100% 100%;
      height: 24px;
      width: 24px;
      position: absolute;
      top: 48px;
      left: calc(100% - 25px);
    }
  }
`;

const RecentActivityItem = ({ card }) => {
  const { title, team, Dday, see } = card;

  return (
    <CardContainer>
      <div>
        <div className="title">{title}</div>
        <div className="team">{team}</div>
        <div className="group">
          <div className="Dday">D-{Dday}</div>
          <div className="see">조회 {see}</div>
        </div>
        <div className="star" />
      </div>
    </CardContainer>
  );
};

export default RecentActivityItem;
