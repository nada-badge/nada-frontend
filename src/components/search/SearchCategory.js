import styled from 'styled-components';
import { body_02 } from '../../styles/fontStyle';

export const SearchCategory = ({ list }) => {
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
    }
  `;
  return (
    <CartegoryList>
      {list.map((el) => (
        <div className="searchFocus">{el}</div>
      ))}
    </CartegoryList>
  );
};
