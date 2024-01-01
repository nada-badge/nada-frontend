import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

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
    width: 345px;
    & > .p {
      ${applyFontStyles({
        font: 'title-02',
      })};
      margin-top: -1px;
      position: relative;
      width: 345px;
      text-align: left;
    }
  }

  & > .profile {
    padding: 8px 15px;
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
      ${applyFontStyles({
        font: 'body-01',
        color: 'var(--myspec-gray-scalegray-900)',
      })};
      margin-top: -1px;
      position: relative;
      width: 345px;
      text-align: left;
    }
  }
`;

export const ViewImg = styled.div`
  position: relative;

  width: 345px;
  height: 345px;
  background-size: 100%;
  background-image: ${({ imgurl }) => `url('${imgurl}')`};
`;
