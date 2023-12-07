import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePostDetailField } from '../../modules/Community/postDetail';
import PostItem from '../../components/community/PostList/PostItem';
import useListQuery from '../../modules/queries/useListQuery';

const PostList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(({ filter }) => filter);
  const { buttonSelect, subButtonSelect } = filter;

  // useQuery를 사용하여 데이터 가져오기
  const { data: postsData, isLoading } = useListQuery({
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
