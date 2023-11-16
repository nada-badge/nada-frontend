import styled from 'styled-components';
import { caption_02, caption_03, body_01 } from '../fontStyle';

export const CommentList = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  text-align: left;
`;

export const Comment = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--myspec-gray-scalegray-200);
  gap: 8px;
  padding: 16px 15px;

  & > .profile {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 145px;
    position: relative;
    & > .image-name-date {
      align-items: center;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 12px;
      justify-content: center;
      position: relative;
      & > .image {
        background-color: var(--myspec-gray-scalegray-300);
        border-radius: 30px;
        height: 32px;
        position: relative;
        width: 32px;
      }
      & > .name-date {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 0 0 auto;

        & > .name {
          ${caption_02('var(--myspec-gray-scalegray-900)')}
          margin-top: -1px;
          position: relative;
          width: 136px;
        }
        & > .date {
          ${caption_03('var(--myspec-gray-scalegray-900)')}
          position: relative;
          width: 136px;
        }
      }
    }
    & > .menu {
      align-items: flex-start;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 10px;
      padding: 8px;
      position: relative;
      & > .meatball {
        display: flex;
        flex-direction: column;
        height: 16px;
        position: relative;
        width: 4px;
        gap: 2px;

        & > .ellipse {
          background-color: var(--myspec-gray-scalegray-600);
          border-radius: 2px;
          height: 4px;
          position: relative;
          width: 4px;
        }
      }
    }
  }

  & > .content {
    ${body_01('var(--myspec-gray-scalegray-900)')}
    position: relative;
    width: 345px;
  }

  & > .likes-reply {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 192px;
    position: relative;
    & > .likes {
      align-items: center;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 4px;
      position: relative;
      & > .like {
        align-items: center;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 6px;
        position: relative;
        & > .text {
          ${body_01('var(--myspec-gray-scalegray-900)')}
          margin-top: -1px;
          position: relative;
          width: 56px;
        }
      }
    }
    & > .reply {
      align-items: flex-start;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 8px;
      position: relative;
      & > .text {
        ${caption_02('var(--myspec-gray-scalegray-900)')}
        margin-top: -1px;
        position: relative;
        width: fit-content;
      }
    }
  }
`;

export const Reply = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--myspec-gray-scalegray-200);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  padding: 16px 15px 16px 40px;
  position: relative;

  & > .profile {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 120px;
    position: relative;
    & > .image-name-date {
      align-items: center;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 12px;
      justify-content: center;
      position: relative;
      & > .image {
        background-color: var(--myspec-gray-scalegray-300);
        border-radius: 30px;
        height: 32px;
        position: relative;
        width: 32px;
      }
      & > .name-date {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 0 0 auto;

        & > .name {
          ${caption_02('var(--myspec-gray-scalegray-900)')}
          margin-top: -1px;
          position: relative;
          width: 136px;
        }
        & > .date {
          ${caption_03('var(--myspec-gray-scalegray-900)')}
          position: relative;
          width: 136px;
        }
      }
    }
    & > .menu {
      align-items: flex-start;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 10px;
      padding: 8px;
      position: relative;
      & > .meatball {
        display: flex;
        flex-direction: column;
        height: 16px;
        position: relative;
        width: 4px;
        gap: 2px;

        & > .ellipse {
          background-color: var(--myspec-gray-scalegray-600);
          border-radius: 2px;
          height: 4px;
          position: relative;
          width: 4px;
        }
      }
    }
  }

  & > .content {
    ${body_01('var(--myspec-gray-scalegray-900)')}
    position: relative;
    width: 320px;
  }

  & > .likes-reply {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 167px;
    position: relative;

    & > .likes {
      align-items: center;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 4px;
      position: relative;
      & > .like {
        align-items: center;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 6px;
        position: relative;
        & > .text {
          ${body_01('var(--myspec-gray-scalegray-900)')}
          margin-top: -1px;
          position: relative;
          width: 56px;
        }
      }
    }
    & > .reply {
      align-items: flex-start;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 8px;
      position: relative;
      & > .text {
        ${caption_02('var(--myspec-gray-scalegray-900)')}
        margin-top: -1px;
        position: relative;
        width: fit-content;
      }
    }
  }
`;
