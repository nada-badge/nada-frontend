/** ShareModal 공유 방법을 선택하는 모달 */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useModal from '../usedInModal/useModal';
import { Layout } from '../../../styles/community/NoticeModalStyle';
import ModalButtonDiv from '../usedInModal/ModalButtonDiv';
import { Toast } from '../Toast';
import { LinkSvg } from '../../../icon/LinkSvg';
import { KakaoSvg } from '../../../icon/KakaoSvg';

const ShareModal = () => {
  const { closeModal } = useModal();
  const url = window.location.href;

  const copyLink = () => {
    Toast({ text: '게시글 링크가 복사되었어요' });
    closeModal();
  };

  return (
    <Layout>
      <div className="title">공유하기</div>
      <div className="border-2" />
      <CopyToClipboard text={url} onCopy={() => copyLink()}>
        <div className="link" onClick={() => copyLink()}>
          <LinkSvg />
          <div className="text">링크 복사하기</div>
        </div>
      </CopyToClipboard>
      <div className="kakaO">
        <KakaoSvg />
        <div className="text">카카오톡 공유하기</div>
      </div>

      <div className="border-2" />
      <ModalButtonDiv cancelText={'닫기'} />
    </Layout>
  );
};

export default ShareModal;
