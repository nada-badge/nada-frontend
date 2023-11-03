import styled from "styled-components";

export const ContentsList = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & > .title {
    background-color: var(--myspec-gray-scalewhite);
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 10px 8px;
    padding: 8px 15px;
    position: relative;
    width: 375px;
    & > .p {
      color: var(--myspec-gray-scalegray-900);
      font-family: var(--title-02-font-family);
      font-size: var(--title-02-font-size);
      font-style: var(--title-02-font-style);
      font-weight: var(--title-02-font-weight);
      letter-spacing: var(--title-02-letter-spacing);
      line-height: var(--title-02-line-height);
      margin-top: -1px;
      position: relative;
      width: 345px;
      text-align: left;
    }
  }

  & > .profile {
    align-items: center;
    background-color: var(--myspec-gray-scalewhite);
    display: inline-flex;
    flex: 0 0 auto;
    gap: 12px;
    justify-content: center;
    padding: 8px 15px;
    position: relative;
    & > .image {
      background-color: var(--myspec-gray-scalegray-300);
      border-radius: 30px;
      height: 32px;
      position: relative;
      width: 32px;
    }
    & > .text {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 301px;

      & > .nickname {
        color: #000000;
        font-family: var(--caption-02-font-family);
        font-size: var(--caption-02-font-size);
        font-style: var(--caption-02-font-style);
        font-weight: var(--caption-02-font-weight);
        letter-spacing: var(--caption-02-letter-spacing);
        line-height: var(--caption-02-line-height);
        margin-top: -1px;
        position: relative;
        width: 136px;
        text-align: left;
      }

      & > .date {
        color: #000000;
        font-family: var(--caption-03-font-family);
        font-size: var(--caption-03-font-size);
        font-style: var(--caption-03-font-style);
        font-weight: var(--caption-03-font-weight);
        letter-spacing: var(--caption-03-letter-spacing);
        line-height: var(--caption-03-line-height);
        position: relative;
        width: 136px;
        text-align: left;
      }
    }
  }

  & > .tag {
    align-items: flex-start;
    background-color: var(--myspec-gray-scalewhite);
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 8px 15px;
    position: relative;
    width: 375px;
  }

  & > .content {
    align-items: flex-start;
    background-color: var(--myspec-gray-scalewhite);
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 10px 12px;
    padding: 12px 15px 84px;
    position: relative;
    width: 375px;
    & > .text {
      color: var(--myspec-gray-scalegray-900);
      font-family: var(--body-01-font-family);
      font-size: var(--body-01-font-size);
      font-style: var(--body-01-font-style);
      font-weight: var(--body-01-font-weight);
      letter-spacing: var(--body-01-letter-spacing);
      line-height: var(--body-01-line-height);
      margin-top: -1px;
      position: relative;
      width: 345px;
      text-align: left;
    }
  }
`;
