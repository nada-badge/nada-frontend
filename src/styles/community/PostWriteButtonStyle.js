import styled from 'styled-components';

export const PostButton = styled.div`
  position: fixed;
  bottom: 100px;
  height: 60px;
  width: 60px;
  left: 50%;
  transform: translate(110px, 0);
  border-radius: 36px;
  background-color: var(--myspec-primaryblue-1);
  box-shadow: 0px 4px 8px #1363ff66;

  & > .group {
    height: 26px;
    left: 1px;
    position: relative;
    top: 17px;
    width: 37px;
  }
`;
