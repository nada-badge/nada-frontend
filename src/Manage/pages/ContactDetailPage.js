import { useParams, useNavigate } from 'react-router-dom';
import { LayoutStyle } from './HomePage.';
import { useGetContact } from '../modules/queries/useGetContact';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { YYYYdotMMdotDate } from '../../modules/common/formatDate';

import { AngleBracket } from '../../icon/AngleBracket';
const ContactDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data } = useGetContact({ _id: params._id });

  const link = {
    padding: '12px 15px',
    display: 'flex',
    alignItems: 'center',
    textDecorationLine: 'none',
    gap: '11px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--myspec-gray-scalegray-200)',
    ...applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  return (
    <LayoutStyle>
      <div style={link} onClick={() => navigate(-1)}>
        뒤로 가기
        <AngleBracket Direction={'left'} />
      </div>
      {data && (
        <TextStyle>
          <div> 보낸 사람 : {data.sender}</div>
          <div>보낸 시간 : {YYYYdotMMdotDate(data.registeredAt)}</div>
          <div>제목 : {data.title}</div>
          <div>내용 : {data.content}</div>
        </TextStyle>
      )}
    </LayoutStyle>
  );
};

export default ContactDetailPage;

const TextStyle = styled.div`
  ${applyFontStyles({
    font: 'body-02',
    color: 'var(--myspec-gray-scalegray-900)',
  })};
  position: relative;

  top: 100px;
`;
