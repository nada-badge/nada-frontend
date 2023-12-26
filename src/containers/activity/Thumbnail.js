import styled from 'styled-components';
import { Star } from '../../components/common/icon/Star';
import { caption_01, title_01 } from '../../styles/fontStyle';
import HashTag from '../../components/activity/HashTag';
import { calculateDday } from '../../modules/activity/calculateDday';

const ThumbContainer = styled.div`
  text-align: left;
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & > .thumbnail-image {
    width: 100%;
  }

  & > .info-box {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.02);
    position: relative;
    display: flex;
    padding: 12px 15px;
    flex-direction: column;
    width: calc(100% - 30px);
    gap: 7px;

    & > .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    & > .title {
      position: relative;
      ${title_01('var(--myspec-gray-scalegray-900)')}
    }

    & > .tagBox {
      display: flex;
      gap: 8px;
    }
  }
`;

const Dday = styled.div`
  padding: 4px 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: var(--myspec-gray-scalegray-400);
  ${caption_01('var(--myspec-gray-scalegray-800)')}

  &.active {
    background: var(--myspec-primaryblue-1);
    ${caption_01('var(--myspec-gray-scalewhite)')}
  }
`;

const Thumbnail = ({ info }) => {
  const { activityName, region, field, category, imageUrl, endedAt } =
    info.activity;

  const TagContent = [region, field, category].flat();
  const result_date = parseInt(
    calculateDday(endedAt).replace(/[^\d-]/g, ''),
    10,
  );

  return (
    info && (
      <ThumbContainer>
        {/* imageUrl 없는 경우 : +icon 추가하기 */}
        <img className="thumbnail-image" alt="thumbnail" src={imageUrl} />
        <div className="info-box">
          <div className="top">
            <Dday
              className={
                result_date >= -14 && result_date <= 0 ? 'active' : null
              }
            >{`D ${calculateDday(endedAt)}`}</Dday>
            <Star />
          </div>
          <div className="title">{activityName}</div>
          <div className="tagBox">
            {TagContent.map((hashtag, idx) => (
              <HashTag key={idx} className="location">
                {hashtag}
              </HashTag>
            ))}
          </div>
        </div>
      </ThumbContainer>
    )
  );
};

export default Thumbnail;
