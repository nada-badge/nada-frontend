import styled from "styled-components";

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & > .title {
    color: var(--myspec-gray-scalegray-900);
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & > .content {
    color: var(--myspec-gray-scalegray-600);
    font-family: var(--caption-02-font-family);
    font-size: var(--caption-02-font-size);
    font-style: var(--caption-02-font-style);
    font-weight: var(--caption-02-font-weight);
    letter-spacing: var(--caption-02-letter-spacing);
    line-height: var(--caption-02-line-height);
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & > .buttonList {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;

    & > .cancel {
      background-color: var(--myspec-gray-scalegray-100);
      border-radius: 10px;
      height: 48px;
      overflow: hidden;
      position: relative;
      width: 128px;
      & > .text {
        color: var(--myspec-gray-scalegray-900);
        font-family: var(--subtitle-02-font-family);
        font-size: var(--subtitle-02-font-size);
        font-style: var(--subtitle-02-font-style);
        font-weight: var(--subtitle-02-font-weight);
        left: 49px;
        letter-spacing: var(--subtitle-02-letter-spacing);
        line-height: var(--subtitle-02-line-height);
        position: absolute;
        text-align: center;
        top: 11px;
        white-space: nowrap;
      }
    }

    & > .delete {
      background-color: var(--myspec-primaryred-1);
      border-radius: 10px;
      height: 48px;
      overflow: hidden;
      position: relative;
      width: 128px;
      & > .text {
        color: var(--myspec-gray-scalegray-100);
        font-family: var(--subtitle-01-font-family);
        font-size: var(--subtitle-01-font-size);
        font-style: var(--subtitle-01-font-style);
        font-weight: var(--subtitle-01-font-weight);
        left: 49px;
        letter-spacing: var(--subtitle-01-letter-spacing);
        line-height: var(--subtitle-01-line-height);
        position: absolute;
        text-align: center;
        top: 11px;
        white-space: nowrap;
      }
    }
  }

  & > .img {
    flex: 0 0 auto;
    position: relative;
  }

  & > .button {
    background-color: var(--myspec-primaryblue-1);
    border-radius: 12px;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 264px;
    & > .ok {
      color: var(--white);
      font-family: var(--subtitle-01-font-family);
      font-size: var(--subtitle-01-font-size);
      font-style: var(--subtitle-01-font-style);
      font-weight: var(--subtitle-01-font-weight);
      left: 117px;
      letter-spacing: var(--subtitle-01-letter-spacing);
      line-height: var(--subtitle-01-line-height);
      position: absolute;
      text-align: center;
      top: 11px;
      white-space: nowrap;
    }
  }

  & > .border {
    height: 8px;
    position: relative;
    width: 256px;
  }

  & > .border-2 {
    height: 16px;
    position: relative;
    width: 256px;
  }
`;
