import styled from 'styled-components';
import { Body } from '../components/body';
import { SlideList } from '../components/Slider/SlideList';
import { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

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

  & > .startButton {
    z-index: 2;
    background-color: #d9d9d9;
    height: 94px;
    top: -94px;
    left: 0;
    position: relative;
    width: 100%;
    pointer-events: none;

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

    &.btnActive {
      background-color: var(--myspec-primaryblue-1);
      cursor: pointer;
      pointer-events: auto;
    }
  }
`;

export const OnboardingPage = () => {
  const [btnActive, setBtnActive] = useState(0);

  const changeActive = (value) => {
    setBtnActive(value);
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Body>
      <OnboardingBox className="onBoardingBox">
        <OverLap className="OverLap">
          <SlideList changeActive={changeActive} />
          <div
            className={classNames('startButton', { btnActive })}
            onClick={goHome}
          >
            <div className="text">시작하기</div>
          </div>
        </OverLap>
      </OnboardingBox>
    </Body>
  );
};
