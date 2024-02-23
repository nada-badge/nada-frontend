import { Profile } from '../../Community/components/comment/Profile';
import { Layout } from '../components/NoticeContent';
import useDeleteId from '../../modules/queries/useDeleteId';

export const ReportedCommentList = ({ data }) => {
  console.log('data :', data.data);

  const { mutate } = useDeleteId();

  const onDelete = (comment) => {
    //API 추가 수정되면 수정 필요
    // mutate({
    //   url: '/community/comment/${comment.?},
    //   _id: comment._id,
    // });
  };

  return (
    <div>
      {data &&
        data.data.map((comment) => (
          <Layout>
            <Profile comment={comment} />
            {comment.content}
            <div className="bottom">
              <button onClick={() => onDelete(comment)}>삭제</button>
            </div>
          </Layout>
        ))}
    </div>
  );
};
