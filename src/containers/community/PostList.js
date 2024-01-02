/**PostList 커뮤니티 게시물 리스트가 나오는 컨테이너 */
import { Link } from 'react-router-dom';
import PostItem from '../../components/community/PostList/PostItem';
import { ErrorMessage } from './ErrorMessage';
const PostList = ({ type, dataSet, setData, isLoading, isError }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {dataSet &&
        dataSet.map((card) => (
          <Link
            to={`/community/PostDetail/${card._id}`}
            key={card._id}
            onClick={() => setData(card)}
          >
            <PostItem key={card._id} card={card} />
          </Link>
        ))}
    </div>
  );
};

export default PostList;
