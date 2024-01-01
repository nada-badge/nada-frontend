/**PostList 커뮤니티 게시물 리스트가 나오는 컨테이너 */
import { Link } from 'react-router-dom';
import PostItem from '../../components/community/PostList/PostItem';
import useListQuery from '../../modules/queries/useListQuery';
import { ErrorMessage } from './ErrorMessage';
const PostList = ({ type, filter, setData }) => {
  // useQuery를 사용하여 데이터 가져오기
  const { data, isLoading, isError } = useListQuery({
    type: type,
    filter: filter,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {type === 'community' &&
        data.map((card) => (
          <Link
            to={`/${type}/PostDetail/${card._id}`}
            key={card._id}
            onClick={() => setData(card)}
          >
            <PostItem key={card._id} card={card} />
          </Link>
        ))}
      {type === 'activity' &&
        data.map((card) => (
          <Link to={`/${type}/DetailActivity/${card._id}`} key={card._id}>
            <PostItem key={card._id} card={card} />
          </Link>
        ))}
    </div>
  );
};

export default PostList;
