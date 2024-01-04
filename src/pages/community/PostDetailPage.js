/** PostDetailPage 세부 게시글을 보여주는 페이지 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagButtons from '../../components/community/postDetail/TagButtons';
import { ContentsList } from '../../styles/community/PostDetailStyle';
import { BottomBar } from '../../containers/community/postDetail/BottomBar';
import { changeBarStatus } from '../../modules/bar';
import { Profile } from '../../components/community/comment/Profile';

const PostDetail = () => {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { title, content, updatedAt, registeredAt } = PostDetail;
  const isEdited = !(updatedAt === registeredAt);

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '세부 게시글',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div>
      <ContentsList>
        <div className="title">
          <div className="p">{title}</div>
        </div>
        <div className="profile">
          <Profile comment={PostDetail} isEdited={isEdited} />
        </div>
        <div className="tag">
          <TagButtons />
        </div>
        <div className="content">
          <div className="text">{content} </div>
          <div className="image-2" />
          <div className="image-2" />
        </div>
      </ContentsList>
      <BottomBar />
    </div>
  );
};

export default PostDetail;
