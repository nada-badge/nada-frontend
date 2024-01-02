import styled from 'styled-components';
import { body_02 } from '../../styles/fontStyle';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/search/search';

const CartegoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  & > .searchFocus {
    flex-grow: 1;
    height: calc(44px - 24px);
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--myspec-gray-scale-gray-400, #d9d9d9);

    // text style
    ${body_02('var(--myspec-gray-scale-gray-600)')}
    text-align: center;

    &.focus {
      border-bottom: 2px solid var(--myspec-primary-blue-1, #1363ff);
    }
  }
`;

export const SearchCategory = ({ list, focus }) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(changeField({ key: 'focus', value: e.target.innerText }));
  };

  return (
    <CartegoryList>
      {list.map((el) => (
        <div
          className={`searchFocus${el === focus ? ' focus' : ''}`}
          key={el}
          onClick={onClick}
        >
          {el}
        </div>
      ))}
    </CartegoryList>
  );
};
