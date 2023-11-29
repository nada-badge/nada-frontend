import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterSelector } from '../../modules/filter';
import { changePostDetailField } from '../../modules/Community/postDetail';
import PostItem from '../../components/community/PostList/PostItem';
import usePostListQuery from '../../modules/queries/CommunityQuery';

const PostList = () => {
  const dispatch = useDispatch();
  const mainCategory = useSelector(
    filterSelector('buttonSelect', 'maincategory'),
  );

  // useQuery를 사용하여 데이터 가져오기
  const { data: postsData } = usePostListQuery(mainCategory);

  const setData = (card) => {
    dispatch(changePostDetailField({ value: card }));
  };

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
