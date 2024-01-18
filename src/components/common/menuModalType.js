/**menuModalType 메뉴모달에 사용되는 행동 관리 컴포넌트 */
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toast } from './Toast';
import PrintCenteredText from './usedInModal/PrintCenteredText';
import useModal from './usedInModal/useModal';
import useSetButtonActive from '../../modules/common/SetButtonActive';
import { PostDetailSelector } from '../../modules/redux/community/postDetail';
import { changeCommentField } from '../../modules/redux/community/postDetail';

export const MenuTypeConfig = (content) => {
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal);
  const commentContent = useSelector(PostDetailSelector('Comment', 'content'));
  const { contentType, position } = modal;
  const navigate = useNavigate();
  const setButtonActive = useSetButtonActive();
  const { closeModal } = useModal();

  const toReport = () => {
    openModal({
      type: 'AskModal',
      title: `${contentType}을 신고할까요?`,
      contentType: contentType,
      actionType: '신고',
      content: `신고한 ${contentType}은 서비스 운영원칙에 따라 처리돼요`,
      position: position,
    });
  };

  const toDelete = () => {
    openModal({
      type: 'AskModal',
      title: `${contentType}을 삭제할까요?`,
      contentType: contentType,
      actionType: '삭제',
      content: `한 번 삭제한 ${contentType}은 복구할 수 없어요`,
      position: position,
    });
  };

  const toShare = () => {
    openModal({
      type: 'ShareModal',
      actionType: '공유',
      position: position,
    });
  };

  const toUpdate = () => {
    if (position === 'post') {
      setButtonActive();
      navigate('/community/PostWrite');
    }
    if (position === 'comment' || position === 'reply') {
      dispatch(changeCommentField({ form: 'position', value: position }));
      dispatch(changeCommentField({ form: 'isUpdating', value: true }));
      dispatch(changeCommentField({ form: 'isReplying', value: false }));
    }
    closeModal();
  };

  const toCopy = () => {
    Toast({ text: '댓글 내용이 복사되었어요' });
    closeModal();
  };

  const Config = {
    Report: <PrintCenteredText print={'신고하기'} act={toReport} />,
    Delete: <PrintCenteredText print={'삭제하기'} act={toDelete} />,
    Share: <PrintCenteredText print={'공유하기'} act={toShare} />,
    Update: <PrintCenteredText print={'수정하기'} act={toUpdate} />,
    Copy: (
      <CopyToClipboard text={commentContent}>
        <div>
          <PrintCenteredText
            print={'댓글 내용 복사하기'}
            act={() => toCopy()}
          />
        </div>
      </CopyToClipboard>
    ),
  };

  return Config[content];
};
