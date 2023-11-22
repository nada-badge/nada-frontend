/** DeleteModal 댓글 삭제를 물어보는 모달 */
import Modal from '../Modal';
import useModal from '../useModal';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../../lib/api/client';
import { PostDetailSelector } from '../../../../modules/Community/postDetail';
import ModalAslOutPut from '../../../community/ModalAskOutput';

function DeleteCommentModal() {
  const postId = useSelector(PostDetailSelector('PostDetail', '_id'));
  const comment_id = useSelector(PostDetailSelector('Comment', '_id'));
  const { closeModal, openModal } = useModal();

  const Delete = useCallback(async () => {
    try {
      await client.delete(`/community/comment/${postId}`, {
        data: { comment_id: comment_id },
      });
      openModal({ type: 'NoticeDeleteModal' });
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
      closeModal();
    }
  }, []);

  return (
    <Modal>
      {ModalAslOutPut({
        title: '댓글을 삭제할까요?',
        content: '한 번 삭제한 댓글은 복구할 수 없어요',
        act: Delete,
        actText: '삭제',
      })}
    </Modal>
  );
}

export default DeleteCommentModal;
