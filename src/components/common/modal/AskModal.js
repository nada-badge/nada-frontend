/** ReportModal 게시글 신고를 물어보는 모달 */
import Modal from '../../Modal/Community/Modal';
import { useSelector } from 'react-redux';
import useModal from '../../Modal/Community/useModal';
import ModalButtonDiv from './ModalButtonDiv';
import { Layout } from '../../../styles/Community/NoticeModalStyle';
import toDelete from '../toDelete';
import useDelete from '../../../modules/queries/useDelete';
import toReport from '../toReport';
import useReport from '../../../modules/queries/useReport';

const AskModal = () => {
  const { openModal } = useModal();
  const { mutate } = useDelete();
  const reportMutate = useReport().mutate;

  const modal = useSelector(({ modal }) => modal);
  const { contentType, actionType, content, position } = modal;
  const PostDetail = useSelector(({ postdetail }) => postdetail);
  const activity = useSelector(({ activity }) => activity.activities);

  const useAct = () => {
    if (actionType === '삭제') {
      const config = toDelete(position, activity, PostDetail);
      mutate({
        url: config.url,
        _id: config.idData,
      });
    }
    if (actionType === '신고') {
      const config = toReport(position, PostDetail);
      console.log('AskModal, config : ', config);
      reportMutate({
        url: config.url,
        _id: config.idData,
      });
    }

    openModal({ type: 'NoticeModal', contentType, actionType });
  };

  return (
    <Modal>
      <Layout>
        <div className="title">
          {contentType}을{actionType}할까요?
        </div>
        <div className="border" />
        <p className="content">{content}</p>
        <div className="border-2" />
        {ModalButtonDiv({
          actText: actionType,
          act: useAct,
          isRed: true,
        })}
      </Layout>
    </Modal>
  );
};

export default AskModal;