/** YourMenuModal 메뉴 클릭 시, 타인이 작성한 글일 경우 나오는 모달 */
import { useSelector } from 'react-redux';
import Modal from './Modal';
import ModalButton from './ModalButton';
import { MenuTypeConfig } from '../menuModalType';
import { List, Border, Layout } from '../../../styles/community/BarModalStyle';

export const MenuModal = () => {
  const modal = useSelector(({ modal }) => modal);
  const { content } = modal;

  return (
    <Modal>
      <Layout>
        <List>
          {content.map((content, index) => {
            return <div key={index}>{MenuTypeConfig(content)}</div>;
          })}
        </List>
        <Border />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
};

export default MenuModal;
