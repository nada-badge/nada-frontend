/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Bar } from '../../../styles/community/CommentBarStyle';
import CommentBar from './CommentBar';
import ReplyNoticeBar from './ReplyNoticeBar';
import usePostQuery from '../../../modules/queries/usePostQuery';
import preSetForQuery from '../../../components/common/preSetForQuery';

export const BottomBar = () => {
  const [inputValue, setInputValue] = useState();
  const { mutate } = usePostQuery();
  const PostDetail = useSelector(({ postdetail }) => postdetail);

  const position = PostDetail.Comment.position;
  const url = preSetForQuery(position, PostDetail).url;
  const content = PostDetail.Comment.content;
  const isReplying = PostDetail.Comment.isReplying;
  const userName = PostDetail.Comment.userName;
  console.log('position in bottom : ', PostDetail);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(content);
  }, [content]);

  const sendComment = () => {
    mutate({ url, content: inputValue });
    setInputValue('');
  };

  return (
    <Bar>
      {isReplying && <ReplyNoticeBar name={userName} />}
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
