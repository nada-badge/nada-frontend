/** PostDetailPage 세부 게시글을 보여주는 페이지 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TagButtons from '../../components/common/TagButtons';
import { DetailPost, ViewImg } from '../../styles/community/PostDetailStyle';
import { BottomBar } from '../../containers/community/postDetail/BottomBar';
import { changeBarStatus } from '../../modules/redux/bar';
import { Profile } from '../../components/community/comment/Profile';
import { useGetPost } from '../../modules/queries/community/useGetCommunity';
import { changePostDetailField } from '../../modules/redux/community/postDetail';

const PostDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useGetPost({
    _id: params._id,
  });
  const [info, setInfo] = useState();
  const [isEdited, setIsEdited] = useState();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '세부 게시글',
        isShowBottom: false,
      }),
    );
  }, []);

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }

    setInfo(data);
    setIsEdited(!(data.updatedAt === data.registeredAt));
    dispatch(changePostDetailField({ value: data }));
  }, [data]);

  return (
    <>
      {info && (
        <DetailPost>
          <div className="title">
            <div className="p">{info.title}</div>
          </div>
          <div className="profile">
            <Profile comment={info} isEdited={isEdited} />
          </div>
          <div className="tag">
            <TagButtons />
          </div>
          <div className="content">
            <div className="text">{info.content} </div>
            {info.imageUrl.map((imgFile, index) => (
              <ViewImg key={index} imgurl={imgFile} />
            ))}
          </div>
        </DetailPost>
      )}
      <BottomBar />
    </>
  );
};

export default PostDetail;
