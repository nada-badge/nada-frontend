import styled from 'styled-components';
import { ErrorMessage } from '../../styles/Register';

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
