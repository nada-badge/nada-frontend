/** ShareModal 공유 방법을 선택하는 모달 */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useModal from '../usedInModal/useModal';
import { Layout } from '../../../styles/community/NoticeModalStyle';
import ModalButton from '../usedInModal/ModalButton';
import { Toast } from '../Toast';

const ShareModal = () => {
  const { closeModal } = useModal();
  const url = window.location.href;
  console.log('now url : ', url);

  const copyLink = () => {
    Toast({ text: '게시글 링크가 복사되었어요' });
    closeModal();
  };

  return (
    <Layout>
      <div className="title">공유하기</div>
      <div className="border-2" />
      <CopyToClipboard text={url} onCopy={() => copyLink()}>
        <div className="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              stroke="#888"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m6 12.001 6-6m-4-3 .463-.536a5 5 0 1 1 7.071 7.072l-.534.464m-5 5-.397.534a5.068 5.068 0 0 1-7.127 0 4.972 4.972 0 0 1 0-7.071L3 8.001"
            />
          </svg>
          <div className="text">링크 복사하기</div>
        </div>
      </CopyToClipboard>
      <div className="kakaO">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#1C1C1C"
            d="M8 .5c1.446 0 2.784.286 4.013.857 1.23.572 2.201 1.349 2.916 2.331C15.643 4.671 16 5.743 16 6.904c0 1.16-.357 2.234-1.071 3.22-.715.985-1.685 1.764-2.911 2.335s-2.566.857-4.018.857c-.458 0-.932-.033-1.42-.1-2.119 1.494-3.247 2.25-3.384 2.268a.225.225 0 0 1-.187-.01.164.164 0 0 1-.054-.072.225.225 0 0 1-.018-.081v-.037c.036-.236.307-1.218.813-2.948-1.149-.58-2.061-1.35-2.737-2.308C.338 9.07 0 8.028 0 6.904 0 5.743.357 4.67 1.071 3.688c.715-.982 1.686-1.76 2.916-2.33C5.216.785 6.554.5 8 .5Z"
          />
        </svg>
        <div className="text">카카오톡 공유하기</div>
      </div>

      <div className="border-2" />
      <ModalButton text={'닫기'} />
    </Layout>
  );
};

export default ShareModal;
