/** MyMenuModal 메뉴 클릭 시, 본인이 작성한 댓글일 경우 출력되는 모달 */
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import useModal from '../useModal';
import PrintCenteredText from '../../../common/modal/PrintCenteredText';
import ModalButton from '../../../common/modal/ModalButton';
import { ModalPropsSelector } from '../../../../modules/Community/modal';
import {
  List,
  Border,
  Layout,
} from '../../../../styles/Community/BarModalStyle';
import { changeCommentField } from '../../../../modules/Community/postDetail';

export const MyCommentModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const props = useSelector(ModalPropsSelector());

  const Update = () => {
    dispatch(changeCommentField({ form: 'content', value: props }));
    close();
  };

  const close = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <List>
          {PrintCenteredText({ text: '수정하기', act: Update })}
          {PrintCenteredText({
            text: '삭제하기',
            modalType: 'DeleteCommentModal',
          })}
        </List>
        <Border />
        <div onClick={close}>{ModalButton('닫기')}</div>
      </Layout>
    </Modal>
  );
};

export default MyCommentModal;
