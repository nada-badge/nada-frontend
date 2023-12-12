import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(48%, auto));
  justify-items: stretch;

  & > div {
    min-width: 100%;
  }
`;

const GridList = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default GridList;
