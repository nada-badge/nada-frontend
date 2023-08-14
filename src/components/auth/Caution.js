import styled from 'styled-components';

const CautionBox = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;

  & > .ImagWrapper {
    border: 2px solid;
    border-color: #f74646;
    border-radius: 10px;
    height: 20px;
    position: relative;
    width: 20px;
    display: flex;
  }

  & > div > img {
    margin: auto;
    display: block;
  }
`;

const ErrorMessage = styled.div`
  color: #000000;
  font-family: var(--body-02-font-family);
  font-size: var(--body-02-font-size);
  font-style: var(--body-02-font-style);
  font-weight: var(--body-02-font-weight);
  letter-spacing: var(--body-02-letter-spacing);
  line-height: var(--body-02-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Caution = ({ error }) => {
  return (
    <CautionBox>
      <div className="ImagWrapper">
        <img
          alt="Img"
          src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/-.svg"
        />
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </CautionBox>
  );
};

export default Caution;
