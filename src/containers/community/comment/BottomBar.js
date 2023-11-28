/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import classNames from 'classnames';
//import useComment from '../../../modules/queries/commentQuery';
//import useReply from '../../../modules/queries/replyQuery';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PostDetailSelector } from '../../../modules/Community/postDetail';
import { Bar } from '../../../styles/Community/CommentBarStyle';
import usePostQuery from '../../../modules/queries/usePostQuery';
import preSetForQuery from '../../../components/common/preSetForQuery';
export const BottomBar = () => {
  const content = useSelector(PostDetailSelector('Comment', 'content'));
  const position = useSelector(PostDetailSelector('Comment', 'position'));
  const [inputValue, setInputValue] = useState();
  const [isActive, setIsActive] = useState(false);
  const { mutate } = usePostQuery();
  const PostDetail = useSelector(({ postdetail }) => postdetail);
  //const sendReply = useReply().mutate;
  const url = preSetForQuery(position, PostDetail).url;

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setIsActive(!!inputValue);
  }, [inputValue]);

  useEffect(() => {
    setInputValue(content);
  }, [content]);

  const sendComment = () => {
    mutate({ url, content: inputValue });
    setInputValue('');
  };

  return (
    <Bar>
      <div className="input">
        <div className="text">
          <input
            className="wrapper"
            onChange={onChange}
            value={inputValue}
            placeholder="댓글을 입력하세요"
          />
        </div>
      </div>
      <div
        className={classNames('sendArrow', { isActive })}
        onClick={sendComment}
      />
    </Bar>
  );
};
