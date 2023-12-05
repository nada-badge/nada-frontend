/**PostList 커뮤니티 게시물 리스트가 나오는 컨테이너 */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePostDetailField } from '../../modules/community/postDetail';
import PostItem from '../../components/community/PostList/PostItem';
import useListQuery from '../../modules/queries/useListQuery';
import { ErrorMessage } from './ErrorMessage';
const PostList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(({ filter }) => filter);
  const { buttonSelect, subButtonSelect } = filter;

  // useQuery를 사용하여 데이터 가져오기
  const {
    data: postsData,
    isLoading,
    isError,
  } = useListQuery({
    mainCategory: buttonSelect.maincategory,
    region: subButtonSelect.region,
    field: subButtonSelect.field,
    category: subButtonSelect.category,
  });
  const setData = (card) => {
    dispatch(changePostDetailField({ value: card }));
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {postsData.map((card) => (
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
