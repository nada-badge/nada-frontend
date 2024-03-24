import { Profile } from '../../Community/components/comment/Profile';
import { Layout } from '../components/NoticeContent';
import { useNavigate } from 'react-router-dom';
import { applyFontStyles } from '../../styles/fontStyle';

export const ReportedCommentList = ({ data }) => {
  const navigate = useNavigate();

  const onClick = (comment) => {
    navigate(`/community/PostDetail/${comment.post_id}`);
  };

  return (
    <div>
      {data &&
        data.data.map((comment) => (
          <Layout>
            <Profile comment={comment} />
            <div
              style={applyFontStyles({
                font: 'body-02',
              })}
            >
              {comment.content}
            </div>
            <div className="bottom">
              <button onClick={() => onClick(comment)}>
                댓글이 포함된 게시글 보러가기
              </button>
            </div>
          </Layout>
        ))}
    </div>
  );
};
