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

      & > .Dday {
        padding: 4px 8px;
        border-radius: 5px;
        background: var(--myspec-gray-scalegray-400);
        ${caption_01('var(--myspec-gray-scale-gray-800)')}
        display: flex;
        align-items: center;
      }
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
const Thumbnail = ({ info }) => {
  const { activityName, region, field, category, imageUrl, endedAt } =
    info.activity;

  const TagContent = [region, field, category].flat();

  return (
    info && (
      <ThumbContainer>
        <img className="thumbnail-image" alt="thumbnail" src={imageUrl} />
        <div className="info-box">
          <div className="top">
            <div className="Dday">{`D ${calculateDday(endedAt)}`}</div>
            <Star />
          </div>
          <div className="title">{activityName}</div>
          <div className="tagBox">
            {TagContent.map((hashtag) => (
              <HashTag className="location">{hashtag}</HashTag>
            ))}
          </div>
        </div>
      </ThumbContainer>
    )
  );
};

export default Thumbnail;
