import { applyFontStyles } from '../../styles/fontStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, searchSelector } from '../../modules/search/search';

const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--myspec-gray-scalegray-100);

  & > .Input {
    ${applyFontStyles({
      font: 'subtitle-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
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

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SearchInput = ({ onSubmit }) => {
  const InputWrapper = {
    width: '100%',
    display: 'flex',
    boxSizing: 'border-box',
    padding: '12px 15px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  };

  const dispatch = useDispatch();

  const { text } = useSelector(searchSelector);

  const onChange = (e) => {
    dispatch(changeField({ key: 'text', value: e.target.value }));
  };

  return (
    <div style={InputWrapper}>
      <Form onSubmit={onSubmit}>
        <input
          className="Input"
          name="searchInput"
          placeholder="검색어를 입력하세요."
          required
          onChange={onChange}
          value={text}
        />
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
      </Form>
    </div>
  );
};
