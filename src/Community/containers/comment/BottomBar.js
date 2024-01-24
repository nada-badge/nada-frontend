/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from '../../styles/CommentBarStyle';
import usePostComment from '../../modules/queries/usePostComment';
import usePatchComment from '../../modules/queries/usePatchComment';
import getBasicUrl from '../../../modules/common/getBasicUrl';
import NoticeBar from './NoticeBar';
import { InputBar } from '../../styles/CommentBarStyle';
import { ArrowSvg } from '../../../icon/ArrowSvg';
import { initializeForm } from '../../modules/redux/postDetail';

export const BottomBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const { mutate: post } = usePostComment();
  const { mutate: update } = usePatchComment();
  const PostDetail = useSelector(({ postdetail }) => postdetail);
  const position = PostDetail.Comment.position;
  const { url, idData } = getBasicUrl(position, PostDetail);
  const content = PostDetail.Comment.content;
  const isReplying = PostDetail.Comment.isReplying;
  const isUpdating = PostDetail.Comment.isUpdating;
  const userName = PostDetail.Comment.userName;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!inputValue);
  }, [inputValue]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(isUpdating ? content : '');
  }, [isUpdating]);

  const sendComment = () => {
    if (isUpdating) {
      update({ url, _id: idData, content: inputValue });
    } else {
      post({ url, content: inputValue });
    }

    dispatch(initializeForm({ form: 'Comment' }));
    setInputValue('');
  };

  return (
    <Bar>
      {isReplying && <NoticeBar name={userName} isReply={true} />}
      {isUpdating && <NoticeBar isReply={false} />}
      <InputBar>
        <div className="input">
          <div className="text">
            {isReplying && <div className="name">@{userName}</div>}
            <input
              className="wrapper"
              onChange={onChange}
              value={inputValue}
              placeholder="댓글을 입력하세요"
            />
          </div>
        </div>
        <ArrowSvg onClick={sendComment} isActive={isActive} />
      </InputBar>
    </Bar>
  );
};
