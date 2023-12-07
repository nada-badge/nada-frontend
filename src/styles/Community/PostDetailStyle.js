import styled from 'styled-components';
import { title_02, caption_02, caption_03, body_01 } from '../fontStyle';

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
      ${title_02('var(--myspec-gray-scalegray-900)')}
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
        ${caption_02('#000000')}
        margin-top: -1px;
        position: relative;
        width: 136px;
        text-align: left;
      }

      & > .date {
        ${caption_03('#000000')}
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
      ${body_01('--myspec-gray-scalegray-900')}
      margin-top: -1px;
      position: relative;
      width: 345px;
      text-align: left;
    }
  }
`;
