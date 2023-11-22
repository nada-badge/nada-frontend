/** ReportModal 게시글 신고를 물어보는 모달 */
import Modal from '../Modal';
import useModal from '../useModal';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../../../../lib/api/client';
import { PostDetailSelector } from '../../../../modules/Community/postDetail';
import ModalAskOutPut from '../../../community/ModalAskOutput';

function ReportModal() {
  const navigate = useNavigate();
  const id = useSelector(PostDetailSelector('_id'));
  const { openModal } = useModal();

  const Report = useCallback(async () => {
    try {
      await client.post('/community/post/report', { data: { _id: id } });
      openModal({ type: 'NoticeReportModal' });
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
    }
  }, [id, navigate]);

  return (
    <Modal>
      {ModalAskOutPut({
        title: '이 글을 신고할까요?',
        content: '신고한 글은 서비스 운영 원칙에 따라 처리돼요',
        act: Report,
        actText: '신고하기',
      })}
    </Modal>
  );
}

export default ReportModal;
