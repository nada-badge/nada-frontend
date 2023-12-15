/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Bar } from '../../../styles/community/CommentBarStyle';
import CommentBar from './CommentBar';
import ReplyNoticeBar from './ReplyNoticeBar';
import usePostQuery from '../../../modules/queries/usePostQuery';
import useUpdateQuery from '../../../modules/queries/useUpdateQuery';
import preSetForQuery from '../../../modules/common/preSetForQuery';
import ModifyNoticeBar from './ModifyNoticeBar';

export const BottomBar = () => {
  const [inputValue, setInputValue] = useState();
  const { mutate } = usePostQuery();
  const update = useUpdateQuery().mutate;
  const PostDetail = useSelector(({ postdetail }) => postdetail);

  const position = PostDetail.Comment.position;
  const { url, idData } = preSetForQuery(position, PostDetail);
  const content = PostDetail.Comment.content;
  const isReplying = PostDetail.Comment.isReplying;
  const isUpdating = PostDetail.Comment.isUpdating;
  const userName = PostDetail.Comment.userName;

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    isUpdating ? setInputValue(content) : setInputValue('');
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
      {isReplying && <ReplyNoticeBar name={userName} />}
      {isUpdating && <ModifyNoticeBar />}
      <CommentBar
        inputValue={inputValue}
        onChange={onChange}
        sendComment={sendComment}
        isReplying={isReplying}
        name={userName}
      />
    </Bar>
  );
};
