/**menuModalType 메뉴모달에 사용되는 행동 관리 컴포넌트 */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PrintCenteredText from './modal/PrintCenteredText';
import useModal from './modal/useModal';
import useSetButtonActive from '../../containers/community/postDetail/SetButtonActive';

export const MenuTypeConfig = (content) => {
  const { openModal } = useModal();
  const modal = useSelector(({ modal }) => modal);
  const { contentType, position } = modal;
  const navigate = useNavigate();
  const setButtonActive = useSetButtonActive();
  const { closeModal } = useModal();

  const toReport = () => {
    openModal({
      type: 'AskModal',
      contentType: contentType,
      actionType: '신고',
      content: `신고한 ${contentType}은 서비스 운영원칙에 따라 처리돼요`,
      position: position,
    });
  };

  const toDelete = () => {
    openModal({
      type: 'AskModal',
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
      closeModal();
    }
    if ([position === 'comment']) {
    }
  };

  const toCopy = () => {
    //코드 추가 예정
  };

  const Config = {
    Report: <PrintCenteredText print={'신고하기'} act={toReport} />,
    Delete: <PrintCenteredText print={'삭제하기'} act={toDelete} />,
    Share: <PrintCenteredText print={'공유하기'} act={toShare} />,
    Update: <PrintCenteredText print={'수정하기'} act={toUpdate} />,
    Copy: <PrintCenteredText print={'댓글 내용 복사하기'} act={toCopy} />,
  };

  return Config[content];
};
