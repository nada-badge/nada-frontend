import { toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { applyFontStyles } from '../../styles/fontStyle';

export const Toast = ({ text }) => {
  toast.success(text, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
    icon: () => <Icon />,
  });
};

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    display: flex;
    height: 120px;
    justify-content: center;
  }
  .Toastify__toast {
    background: transparent;
    box-shadow: none;
  }
  .Toastify__toast-body {
    display: flex;
    gap: 8px;
    padding: 8px 12px;
    margin: 0px;
    border-radius: 10px;
    background-color: var(--myspec-gray-scalegray-800);
    height: 22px;
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-100)',
    })};
  }
  .Toastify__toast-icon {
    width: 17px;
    margin-inline-end: 0px;
  }
`;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="12"
    fill="none"
    viewBox="0 0 17 12"
  >
    <path stroke="#2FEDAF" stroke-width="2" d="m1 5.5 5.5 5 9.5-9" />
  </svg>
);
