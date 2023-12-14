/** AskModal 게시글 신고 또는 삭제를 물어보는 모달 */
import { useSelector } from 'react-redux';
import useModal from '../usedInModal/useModal';
import ModalButtonDiv from '../usedInModal/ModalButtonDiv';
import { Layout } from '../../../styles/community/NoticeModalStyle';
import preSetForQuery from '../../../modules/common/preSetForQuery';
import useDelete from '../../../modules/queries/useDelete';
import toReport from '../../../modules/common/toReport';
import useReport from '../../../modules/queries/useReport';
import { Toast } from '../Toast';

const AskModal = () => {
  const { openModal, closeModal } = useModal();
  const { mutate } = useDelete();
  const reportMutate = useReport().mutate;

  const modal = useSelector(({ modal }) => modal);
  const { contentType, actionType, content, position } = modal;
  const PostDetail = useSelector(({ postdetail }) => postdetail);
  const activity = useSelector(({ activity }) => activity.activities);

  const useAct = () => {
    if (actionType === '삭제') {
      const config = preSetForQuery(position, PostDetail, activity);
      mutate({
        url: config.url,
        _id: config.idData,
      });
    }
    if (actionType === '신고') {
      const config = toReport(position, PostDetail);
      reportMutate({
        url: config.url,
        _id: config.idData,
      });
    }
    if (modal.position === 'comment' || modal.position === 'reply') {
      Toast({ text: '댓글이 ' + actionType + '되었어요' });
      closeModal();
    } else {
      openModal({ type: 'NoticeModal', contentType, actionType });
    }
  };

  return (
    <Layout>
      <div className="title">
        {contentType}을 {actionType}할까요?
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
  );
};

export default AskModal;
