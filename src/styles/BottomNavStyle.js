/*스타일컴포넌트. 아직 미구현*/
import styled from 'styled-components';

export const navi = styled.div`
  background-color: #ffffff;
  border-color: #0000000f;
  border-top-style: solid;
  border-top-width: 1px;
  height: 84px;
  position: fixed;
  width: 375px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  & > .home {
    height: 42px;
    left: 34px;
    position: absolute;
    top: 11px;
    width: 26px;
  }

  & > .home-acttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 5px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-primaryblue-1);
  }

  & > .home-deacttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 5px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-gray-scalegray-600);
  }

  & > .img {
    height: 26px;
    left: 0;
    position: absolute;
    top: 0;
    width: 26px;
  }

  & > .activity {
    height: 42px;
    left: 102px;
    position: absolute;
    top: 11px;
    width: 26px;
  }

  & > .activity-acttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 2px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-primaryblue-1);
  }

  & > .activity-deacttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 2px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-gray-scalegray-600);
  }

  & > .badge {
    height: 42px;
    left: 173px;
    position: absolute;
    top: 11px;
    width: 26px;
  }

  & > .badge-acttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 2px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-primaryblue-1);
  }

  & > .badge-deacttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 2px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-gray-scalegray-600);
  }

  & > .community {
    height: 42px;
    left: 237px;
    position: absolute;
    top: 11px;
    width: 41px;
  }

  & > .community-acttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: -8px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-primaryblue-1);
  }

  & > .community-deacttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: -8px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-gray-scalegray-600);
  }

  & > .my {
    height: 42px;
    left: 315px;
    position: absolute;
    top: 11px;
    width: 26px;
  }

  & > .my-acttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 10;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-primaryblue-1);
  }

  & > .my-deacttext {
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 10;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: absolute;
    text-align: center;
    top: 28px;
    white-space: nowrap;
    color: var(--myspec-gray-scalegray-600);
  }

  & > .overlap-group {
    height: 18px;
    left: 3px;
    position: relative;
    top: 3px;
    width: 20px;
  }

  & > .rectangle {
    border-radius: 4px;
    height: 14px;
    left: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  & > .vector {
    height: 11px;
    left: 10px;
    position: absolute;
    top: 7px;
    width: 10px;
  }
`;
