/** DeleteModal 게시글 삭제를 물어보는 모달 */
import Modal from '../Modal';
import useModal from '../useModal';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../../lib/api/client';
import { PostDetailSelector } from '../../../../modules/Community/postDetail';
import ModalAslOutPut from '../../../common/modal/ModalAskOutput';

function DeleteModal() {
  const id = useSelector(PostDetailSelector('PostDetail', '_id'));
  const { closeModal, openModal } = useModal();

  const Delete = useCallback(async () => {
    try {
      await client.delete('/community/post', { data: { _id: id } });
      openModal({ type: 'NoticeModal', title: '글이 삭제' });
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
      closeModal();
    }
  }, [id]);

  return (
    <Modal>
      {ModalAslOutPut({
        title: '글을 삭제할까요?',
        content: '한 번 삭제한 글은 복구할 수 없어요',
        act: Delete,
        actText: '삭제',
      })}
    </Modal>
  );
}

export default DeleteModal;
