import styled from "styled-components";

export const CommunityPage = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  text-align: left;
  gap: 12px 0px;
  background-color: var(--myspec-gray-scalegray-100);
`;

export const Search = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 64px;
  position: relative;
  width: 375px;

  & > .Input {
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 10px;
    height: 40px;
    left: 15px;
    overflow: hidden;
    position: relative;
    top: 12px;
    width: 345px;

    & > .Text {
      color: var(--myspec-gray-scalegray-600);
      font-family: var(--subtitle-02-font-family);
      font-size: var(--subtitle-02-font-size);
      font-style: var(--subtitle-02-font-style);
      font-weight: var(--subtitle-02-font-weight);
      height: 24px;
      left: 12px;
      letter-spacing: var(--subtitle-02-letter-spacing);
      line-height: var(--subtitle-02-line-height);
      position: absolute;
      top: 7px;
      white-space: nowrap;
    }

    & > .SearchImg {
      height: 24px;
      left: 309px;
      position: absolute;
      top: 8px;
      width: 24px;
    }
  }
`;

export const Border = styled.div`
  height: 16px;
  position: relative;
`;

export const Contents = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 546px;
  position: relative;
  width: 375px;

  & > .Content {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    left: 15px;
    position: relative;
    top: 12px;
  }
`;
