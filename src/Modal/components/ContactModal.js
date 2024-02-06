/** ContactModal을 통해 [년, 월] 을 정하는 모달 */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../modules/useModal';
import styled from 'styled-components';

const ContactModal = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const modal = useSelector(({ modal }) => modal);
  const { contentType: name, content: index } = modal;

  return (
    <Layout className="Layout">
      <Header>
        <div onClick={closeModal}>취소</div>
        <div>새로운 메시지</div>
      </Header>
    </Layout>
  );
};

export default ContactModal;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Header = styled.div``;
