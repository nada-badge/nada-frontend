import { subtitle_02 } from '../styles/fontStyle';
import styled from 'styled-components';

const InputWrapper = styled.div`
  background: var(--myspec-gray-scale-white);
  display: flex;
  width: calc(375px - 30px);
  height: calc(64px - 24px);
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & > form {
    display: flex;
    width: calc(345px - 24px);
    height: calc(40px - 16px);
    padding: 8px 12px;
    justify-content: center;
    align-items: flex-start;
    gap: calc(168px - 30px);
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--myspec-gray-scalegray-100);

    & > .Input {
      ${subtitle_02('var(--myspec-gray-scalegray-600)')}
      background: var(--myspec-gray-scalegray-100);
      border: none;
      background-color: none;

      &:focus {
        outline: none;
      }

      &:focus::placeholder {
        color: transparent;
      }
    }

    & > button {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      background: none;
      border: none;
      padding: 0;
    }
  }
`;

export const SearchInput = () => {
  return (
    <InputWrapper>
      <form>
        <input className="Input" placeholder="검색어를 입력하세요." />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#686868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#686868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </InputWrapper>
  );
};
