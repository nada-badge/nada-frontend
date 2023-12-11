import styled from 'styled-components';
import { Star } from '../../components/common/icon/Star';
import { caption_01, title_01 } from '../../styles/fontStyle';
import HashTag from '../../components/activity/HashTag';

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
const Thumbnail = () => {
  return (
    <ThumbContainer>
      <img
        className="thumbnail-image"
        alt="thumbnail"
        src="https://c.animaapp.com/lXzw4Thb/img/image-1@2x.png"
      />
      <div className="info-box">
        <div className="top">
          <div className="Dday"> D - 56 </div>
          <Star />
        </div>
        <div className="title">2023 안양시 정책공모전</div>
        <div className="tagBox">
          <HashTag className="location">경기</HashTag>
          <HashTag className="domain">경영/경제/무역</HashTag>
          <HashTag className="activity"> 공모전</HashTag>
        </div>
      </div>
    </ThumbContainer>
  );
};

export default Thumbnail;
