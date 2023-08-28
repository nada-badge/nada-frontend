import cn from 'classnames';
import styled from 'styled-components';

// button
const ItemWrapper = styled.div`
  border-radius: 10px;
  height: 44px;
  overflow: hidden;
  position: relative;
  width: 345px;
  background-color: var(--myspec-gray-scalegray-100);

  & > .text {
    color: var(--myspec-gray-scalegray-900);
    font-family: var(--body-01-font-family);
    font-size: var(--body-01-font-size);
    font-style: var(--body-01-font-style);
    font-weight: var(--body-01-font-weight);
    height: 21px;
    left: 12px;
    letter-spacing: var(--body-01-letter-spacing);
    line-height: var(--body-01-line-height);
    position: absolute;
    top: 10px;
    white-space: nowrap;
  }
`;

const VectorWrapper = styled.div`
  border-radius: 12px;
  height: 24px;
  left: 309px;
  position: absolute;
  top: 10px;
  width: 24px;
  background-color: lightgray;
  .checked & {
    background-color: var(--myspec-primarymint-2);
  }

  & > img {
    height: 9px;
    left: 5px;
    position: absolute;
    top: 8px;
    width: 14px;
  }
`;

const TeamTypeItem = ({ team, onClick }) => {
  const { id, text, checked } = team;

  return (
    <ItemWrapper
      className={cn('checkbox', { checked })}
      onClick={() => onClick(id)}
    >
      <div className="text">{text}</div>
      <VectorWrapper>
        <img
          className="vector"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/0764f03f79697363fe8b1f357b6c1cd7/img/vector-6-8.svg"
        />
      </VectorWrapper>
    </ItemWrapper>
  );
};
export default TeamTypeItem;
