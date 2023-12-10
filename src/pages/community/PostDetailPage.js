/** PostDetailPage 세부 게시글을 보여주는 페이지 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagButtons from '../../components/community/postDetail/TagButtons';
import { ContentsList } from '../../styles/community/PostDetailStyle';
import { BottomBar } from '../../containers/community/postDetail/BottomBar';
import Dateformat from '../../components/community/Dateformat';
import { setBarStatus } from '../../modules/bar';

const PostDetail = () => {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { userName, title, content, updatedAt } = PostDetail;

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
    <div>
      <ContentsList>
        <div className="title">
          <div className="p">{title}</div>
        </div>
        <div className="profile">
          <div className="image" />
          <div className="text">
            <div className="nickname">{userName}</div>
            <div className="date">{Dateformat(updatedAt)}</div>
          </div>
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
