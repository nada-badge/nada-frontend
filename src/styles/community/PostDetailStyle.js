import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const DetailPost = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: 375px;
  box-sizing: border-box;

  & > .title {
    background-color: var(--myspec-gray-scalewhite);
    flex: 0 0 auto;

    padding: 8px 15px;
    position: relative;

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
  }

  & > .content {
    align-items: flex-start;
    background-color: var(--myspec-gray-scalewhite);
    display: flex;
    flex: 0 0 auto;
    gap: 10px 12px;
    padding: 12px 15px 84px;
    position: relative;
    flex-wrap: wrap;

    & > .text {
      ${applyFontStyles({
        font: 'body-01',
        color: 'var(--myspec-gray-scalegray-900)',
      })};
      word-break: break-all;
      text-align: left;
    }
  }
`;

export const ViewImg = styled.div`
  position: relative;
  width: 345px;
  height: 450px;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: contain;
  background-image: ${({ imgurl }) => `url('${imgurl}')`};
`;
