import { useSelector } from 'react-redux';
import { PostDetailSelector } from '../../../modules/community/postDetail';

const CountComment = () => {
  const comments = useSelector(PostDetailSelector('PostDetail', 'comments'));

  const totalComments = comments.reduce(
    (acc, comment) =>
      acc + comment.replies.length + (comment.isDeleted ? 0 : 1),
    0,
  );

  return totalComments;
};

export default CountComment;
