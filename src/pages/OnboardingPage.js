import styled from 'styled-components';
import { Body } from '../components/body';
import { SlideList } from '../components/Slider/SlideList';

const OnboardingBox = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  height: 812px;
  position: relative;
  width: 375px;
`;

const OverLap = styled.div`
  height: 100%;
  left: 0;
  position: relative;
  width: 375px;

  & > .startbutton {
    z-index: 2;
    background-color: #d9d9d9;
    height: 94px;
    top: -94px;
    left: 0;
    position: relative;
    width: 100%;

    & > .text {
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
        <OverLap>
          <SlideList />
          <div className="startbutton">
            <div className="text">시작하기</div>
          </div>
        </OverLap>
      </OnboardingBox>
    </Body>
  );
};
