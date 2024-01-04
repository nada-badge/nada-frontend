/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Bar } from '../../../styles/community/CommentBarStyle';
import usePostComment from '../../../modules/queries/community/usePostComment';
import usePatchComment from '../../../modules/queries/community/usePatchComment';
import preSetForQuery from '../../../modules/common/preSetForQuery';
import NoticeBar from './NoticeBar';
import { InputBar, Img } from '../../../styles/community/CommentBarStyle';
import { ArrowSvg } from '../../../icon/ArrowSvg';

export const BottomBar = () => {
  const [inputValue, setInputValue] = useState();
  const { mutate } = usePostComment();
  const update = usePatchComment().mutate;
  const PostDetail = useSelector(({ postdetail }) => postdetail);

  const position = PostDetail.Comment.position;
  const { url, idData } = preSetForQuery(position, PostDetail);
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
      mutate({ url, content: inputValue });
    }

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
