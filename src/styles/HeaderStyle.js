import styled from 'styled-components';

export const Top = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  height: 88px;
  position: relative;
  width: 375px;
  margin: 0 auto;
`;

export const Overlap = styled.div`
  height: 22px;
  left: 3px;
  position: absolute;
  width: 21px;
`;

export const Img = styled.image`
  height: 20px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 18px;
  background-size: 100%;
  outline: red;

  &.Logo {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/-----1.svg');
    height: 20px;
    left: 15px;
    top: 53px;
    width: 110px;
  }
  &.Back {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/chevron-left-1.svg');
    height: 24px;
    left: 8px;
    top: 49px;
    width: 24px;
  }
  &.Bell {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/vector-4.svg');
    height: 24px;
    left: 336px;
    top: 50px;
    width: 24px;
  }
  &.Menu {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/menu-1.svg');
    height: 24px;
    left: 336px;
    top: 50px;
    width: 24px;
  }
  &.BellWMenu {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/vector-4.svg');
    height: 24px;
    left: 304px;
    top: 50px;
    width: 24px;
  }
`;

export const Ellipse = styled.div`
  background-color: var(--myspec-primarymint-2);
  border-radius: 2 > 5px;
  height: 5px;
  left: 16px;
  position: absolute;
  top: 0;
  width: 5px;
`; //bell이미지에 동그라미까지 포함될 경우 해당 스타일은 사용 안해도 됨.

export const Textwrapper = styled.div`
  color: #000000;
  font-family: var(--title-02-font-family);
  font-size: var(--title-02-font-size);
  font-style: var(--title-02-font-style);
  font-weight: var(--title-02-font-weight);
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: var(--title-02-letter-spacing);
  line-height: var(--title-02-line-height);
  position: absolute;

  top: 47px;
  white-space: nowrap;
`;
