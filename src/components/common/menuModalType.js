//각 요소에 대한 구현
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PrintCenteredText from './modal/PrintCenteredText';
import useModal from '../Modal/Community/useModal';
import useSetButtonActive from '../../containers/community/postDetail/SetButtonActive';

export function MenuTypeConfig(content) {
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

  const toCopy = () => {};

  const Config = {
    Report: (
      <div>
        {PrintCenteredText({
          print: '신고하기',
          act: toReport,
        })}
      </div>
    ),
    Delete: (
      <div>
        {PrintCenteredText({
          print: '삭제하기',
          act: toDelete,
        })}
      </div>
    ),
    Share: (
      <div>
        {PrintCenteredText({
          print: '공유하기',
          act: toShare,
        })}
      </div>
    ),
    Update: (
      <div>
        {PrintCenteredText({
          print: '수정하기',
          act: toUpdate,
        })}
      </div>
    ),
    Copy: (
      <div>
        {PrintCenteredText({
          print: '댓글 내용 복사하기',
          act: toCopy,
        })}
      </div>
    ),
  };

  return Config[content];
}
