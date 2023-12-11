import styled from 'styled-components';

export const PostButton = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(110px, 0);
  background-color: var(--myspec-primaryblue-1);
  border-radius: 36px;
  height: 60px;
  width: 60px;

  & > .group {
    height: 26px;
    left: 13px;
    position: relative;
    top: 17px;
    width: 37px;
  }
`;
