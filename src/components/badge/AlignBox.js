import styled from 'styled-components';
import { body_02 } from '../../styles/fontStyle';

const BoxW = styled.div`
  display: flex;
  padding: 8px 0px 8px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  ${body_02}
`;

export const AlignBox = () => {
  const BoxWrapper = {
    display: 'flex',
    padding: '8px 0px 8px 12px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '8px',
    ...body_02('var(--myspec-gray-scale-gray-700, #686868)'),
  };

  return (
    <BoxW>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
      >
        <line y1="1.5" x2="14" y2="1.5" stroke="#686868" />
        <line y1="6.5" x2="14" y2="6.5" stroke="#686868" />
        <line y1="11.5" x2="14" y2="11.5" stroke="#686868" />
        <circle cx="3.5" cy="1.5" r="1.5" fill="#686868" />
        <circle cx="11.5" cy="6.5" r="1.5" fill="#686868" />
        <circle cx="6.5" cy="11.5" r="1.5" fill="#686868" />
      </svg>
      <p>연도별 정렬</p>
    </BoxW>
  );
};
