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
  const { closeModal, openModal } = useModal();
  const dispatch = useDispatch();
  const props = useSelector(ModalPropsSelector());

  const Update = () => {
    dispatch(changeCommentField({ form: 'content', value: props }));
    close();
  };

  const deleteComment = () => {
    openModal({
      type: 'AskModal',
      contentType: '댓글',
      actionType: '삭제',
      content: '한 번 삭제한 댓글은 복구할 수 없어요',
      position: 'comment',
    });
  };

  const close = () => {
    closeModal();
  };

  return (
    <Modal>
      <Layout>
        <List>
          {PrintCenteredText({ print: '수정하기', act: Update })}
          {PrintCenteredText({ print: '삭제하기', act: deleteComment })}
        </List>
        <Border />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
};

export default MyCommentModal;
