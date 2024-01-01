/** PostDetailPage 세부 게시글을 보여주는 페이지 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagButtons from '../../components/community/postDetail/TagButtons';
import { ContentsList, ViewImg } from '../../styles/community/PostDetailStyle';
import { BottomBar } from '../../containers/community/postDetail/BottomBar';
import { setBarStatus } from '../../modules/bar';
import { Profile } from '../../components/community/comment/Profile';

const PostDetail = () => {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { title, content, updatedAt, registeredAt, imageUrl } = PostDetail;
  const isEdited = !(updatedAt === registeredAt);

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'back',
        text: '세부 게시글',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
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
          {imageUrl.map((imgFile, index) => (
            <ViewImg key={index} imgurl={imgFile} />
          ))}
        </div>
      </ContentsList>
      <BottomBar />
    </>
  );
};

export default PostDetail;
