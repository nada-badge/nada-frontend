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

  & > .img {
    flex: 0 0 auto;
    position: relative;
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

  & > .link {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    width: 232px;
    height: 48px;
    padding: 12px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--myspec-gray-scalegray-200);

    &.text {
      color: #000000;
      font-family: var(--subtitle-02-font-family);
      font-size: var(--subtitle-02-font-size);
      font-style: var(--subtitle-02-font-style);
      font-weight: var(--subtitle-02-font-weight);
      letter-spacing: var(--subtitle-02-letter-spacing);
      line-height: var(--subtitle-02-line-height);
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
  & > .kakaO {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    width: 232px;
    height: 48px;
    padding: 12px;

    & > .text {
      color: #000000;
      font-family: var(--subtitle-02-font-family);
      font-size: var(--subtitle-02-font-size);
      font-style: var(--subtitle-02-font-style);
      font-weight: var(--subtitle-02-font-weight);
      letter-spacing: var(--subtitle-02-letter-spacing);
      line-height: var(--subtitle-02-line-height);
      margin-top: -1.12px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  background-size: 100%;
  width: 16px;
  height: 16px;

  .linkImg {
    background-color: blue;
    height: 16px;
    background-image: url("https://c.animaapp.com/6iR4vGz3/img/link@2x.png");
  }
  & .kakaOImg {
    height: 15px;
    background-image: url("https://c.animaapp.com/6iR4vGz3/img/vector.png");
  }
`;
