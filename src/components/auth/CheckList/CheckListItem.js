import styled from 'styled-components';
import { ErrorMessage } from '../../../styles/Register';

const CheckItem = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;

  & > img {
    height: 11.09px;
    margin-left: -0.67px;
    position: relative;
    width: 16.36px;
  }
`;

const CheckListItem = ({ text, checked }) => {
  return (
    <CheckItem>
      {checked ? (
        <img
          className="check"
          alt="Check"
          src="https://generation-sessions.s3.amazonaws.com/38b27749be3d915368d8e6ccd4ebc802/img/check-2.svg"
        />
      ) : (
        <img
          className="check"
          alt="Check"
          src="https://generation-sessions.s3.amazonaws.com/a978d180a1bb500ecf9724a4add382cf/img/check-3.svg"
        />
      )}
      <ErrorMessage>{text}</ErrorMessage>
    </CheckItem>
  );
};
export default CheckListItem;
