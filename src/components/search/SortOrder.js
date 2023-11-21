import styled from 'styled-components';
import { body_01 } from '../../styles/fontStyle';

const Container = styled.div`
  display: flex;
  width: calc(100% - 6px);
  padding: 7px 6px 0px 0px;
  justify-content: flex-end;
  align-items: center;

  & > .wrapper {
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 3px;

    & > svg {
      width: 9px;
      height: 100%;
    }

    & > .text {
      ${body_01('var(--myspec-gray-scale-gray-600, #888)')}
    }
  }
`;
export const SortOrder = () => {
  return (
    <Container>
      <div className="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill="none"
        >
          <path d="M1 4L3.64706 1.5V11.5" stroke="#888888" />
          <path d="M10 9L7.35294 11.5L7.35294 1.5" stroke="#888888" />
        </svg>
        <div className="text">{'최신 순'}</div>
      </div>
    </Container>
  );
};

export default SortOrder;
