/** CountComment 게시물 답글의 총 갯수를 반환하는 컴포넌트  */
import { useSelector } from 'react-redux';
import { PostDetailSelector } from '../../../modules/redux/community/postDetail';

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
