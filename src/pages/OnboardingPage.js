import styled from 'styled-components';
import { SlideMarker } from '../components/Slider/SlideMarker';
import { Body } from '../components/body';

const OnboardingBox = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  height: 812px;
  position: relative;
  width: 375px;

  & > p {
    color: var(--myspec-gray-scalegray-900);
    font-family: var(--title-02-font-family);
    font-size: var(--title-02-font-size);
    font-style: var(--title-02-font-style);
    font-weight: var(--title-02-font-weight);
    height: 54px;
    left: 70px;
    letter-spacing: var(--title-02-letter-spacing);
    line-height: var(--title-02-line-height);
    position: absolute;
    text-align: center;
    top: 138px;
  }
`;

const OverLap = styled.div`
  height: 603px;
  left: 0;
  position: absolute;
  top: 209px;
  width: 375px;

  & > img {
    height: 594px;
    left: 42px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 296px;
  }

  & > .startbutton {
    background-color: #d9d9d9;
    height: 94px;
    left: 0;
    position: absolute;
    top: 509px;
    width: 375px;

    & > div {
      color: var(--myspec-gray-scalewhite);
      font-family: var(--title-01-font-family);
      font-size: var(--title-01-font-size);
      font-style: var(--title-01-font-style);
      font-weight: var(--title-01-font-weight);
      height: 27px;
      left: 156px;
      letter-spacing: var(--title-01-letter-spacing);
      line-height: var(--title-01-line-height);
      position: absolute;
      text-align: center;
      top: 13px;
      white-space: nowrap;
    }
  }
`;

export const OnboardingPage = () => {
  return (
    <Body>
      <OnboardingBox>
        <SlideMarker />
        <p className="p">
          내 대외활동 기록을
          <br />
          인증된 뱃지를 통해 관리해 보세요
        </p>
        <OverLap>
          <img
            className="image"
            alt="가이드화면"
            src="https://generation-sessions.s3.amazonaws.com/ea4f3b6630e080227dbcc2e08efda97e/img/image-4.png"
          />
          <div className="startbutton">
            <div className="text-wrapper-2">시작하기</div>
          </div>
        </OverLap>
      </OnboardingBox>
    </Body>
  );
};
