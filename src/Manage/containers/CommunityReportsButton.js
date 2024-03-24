import { TextWarpper } from '../../Community/styles/SelectButton';

export const CommunityReportsButton = ({
  showPostReports,
  setShowPostReports,
  showCommentReports,
  setShowCommentReports,
}) => {
  const setReport = (content) => {
    if (content === 'post') {
      setShowPostReports(!showPostReports);
      setShowCommentReports(false);
    } else {
      setShowCommentReports(!showCommentReports);
      setShowPostReports(false);
    }
  };

  return (
    <>
      <TextWarpper
        onClick={() => setReport('post')}
        className={showPostReports ? 'isActive' : ''}
      >
        신고된 게시글
      </TextWarpper>
      <TextWarpper
        onClick={() => setReport('comment')}
        className={showCommentReports ? 'isActive' : ''}
      >
        신고된 댓글
      </TextWarpper>
    </>
  );
};
