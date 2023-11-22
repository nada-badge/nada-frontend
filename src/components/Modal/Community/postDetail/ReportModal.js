/** ReportModal 게시글 신고를 물어보는 모달 */
import Modal from '../Modal';
import { useSelector } from 'react-redux';
import { PostDetailSelector } from '../../../../modules/Community/postDetail';
import ModalAskOutPut from '../../../common/modal/ModalAskOutput';
import useReport from '../../../../modules/queries/reportQuery';

function ReportModal() {
  const _id = useSelector(PostDetailSelector('PostDetail', '_id'));
  const { mutate } = useReport();

  const Report = () => {
    mutate({ _id });
  };

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
