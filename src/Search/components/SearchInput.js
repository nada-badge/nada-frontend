import { applyFontStyles } from '../../styles/fontStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, searchSelector } from '../modules/redux/search';
import { SearchGlass } from '../../icon/SearchGlass';
import { MainCategory } from '../../Modal/styles/ModalStyle';
import { FilterHandler } from '../../icon/FilterHandler';

const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  flex: 1 0 auto;
  padding: 8px 12px;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;

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
    background: none;
    border: none;
    padding: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SearchInput = ({ onSubmit, isMaincategory }) => {
  const InputWrapper = {
    width: '345px',
    height: '40px',
    display: 'flex',
    boxSizing: 'border-box',
    margin: '12px 15px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '10px',
    backgroundColor: 'var(--myspec-gray-scalegray-100)',
  };

  const MainCategoryStyle = {
    minWidth: '56px',
    backgroundColor: 'var(--myspec-gray-scalegray-200)',
    borderRadius: '10px  0px 0px 10px ',
    display: 'flex',
    boxSizing: 'border-box',
    padding: '7px 10px',
    gap: '4px',
    alignItems: 'center',
    ...applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  const dispatch = useDispatch();

  // redux에서 검색어 추출하기
  const { text } = useSelector(searchSelector);

  // 입력에 따라, redux > search > text 값 변경해주기
  const onChange = (e) => {
    dispatch(changeField({ key: 'text', value: e.target.value }));
  };

  return (
    <div style={InputWrapper}>
      {isMaincategory && (
        <div style={MainCategoryStyle}>
          모집
          <FilterHandler
            isSmall={true}
            className="unselected"
            color={'black'}
          />
        </div>
      )}
      <Form onSubmit={onSubmit} id={'search'}>
        <input
          className="Input"
          name="searchInput"
          placeholder="검색어를 입력하세요."
          required
          onChange={onChange}
          value={text}
        />
        <button>
          <SearchGlass />
        </button>
      </Form>
    </div>
  );
};
