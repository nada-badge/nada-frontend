/** MyMenuModal 메뉴 클릭 시, 본인이 작성한 댓글일 경우 출력되는 모달 */
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import useModal from '../useModal';
import classNames from 'classnames';
import ModalButton from '../../../common/modalComponent/ModalButton';
import { ModalPropsSelector } from '../../../../modules/Community/modal';
import {
  Menu,
  List,
  Border,
  Layout,
} from '../../../../styles/Community/BarModalStyle';
import { changeCommentField } from '../../../../modules/Community/postDetail';

export const MyCommentModal = () => {
  const { closeModal, openModal } = useModal();
  const dispatch = useDispatch();
  const props = useSelector(ModalPropsSelector());

  const Output = (text) => {
    const isRed = text === '삭제하기';
    return (
      <Menu>
        <div className={classNames('text-wrapper', { isRed })}>{text}</div>
      </Menu>
    );
  };

  const Update = () => {
    dispatch(changeCommentField({ form: 'content', value: props }));
    close();
  };

  const MoveToDelete = () => {
    openModal({ type: 'DeleteCommentModal' });
  };

  const close = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <List>
          <div onClick={Update}>{Output('수정하기')}</div>
          <div onClick={MoveToDelete}>{Output('삭제하기')}</div>
        </List>
        <Border />
        <div onClick={close}>{ModalButton('닫기')}</div>
      </Layout>
    </Modal>
  );
};

export default MyCommentModal;
