import styled from 'styled-components';

const ButtonBox = styled.button`
  & {
    background-color: #1363ff;
    border-radius: 10px;
    height: 55px;
    left: 0;
    position: absolute;
    top: 342px;
    width: 345px;
    border: none;

    &:disabled {
      opacity: 0.3;
    }

    & > div {
      color: var(--myspec-gray-scalewhite);
      font-family: var(--title-01-font-family);
      font-size: var(--title-01-font-size);
      font-style: var(--title-01-font-style);
      font-weight: var(--title-01-font-weight);
      height: 27px;
      left: 156px;
      letter-spacing: var(--title-01-letter-spacing);
      line-height: var(--title-01-line-height);
      position: absolute;
      text-align: center;
      top: 13px;
      white-space: nowrap;
    }
  }
`;

const Button = ({ form, text, disabled }) => {
  return (
    <ButtonBox form={form} disabled={disabled}>
      <div>{text}</div>
    </ButtonBox>
  );
};

export default Button;
