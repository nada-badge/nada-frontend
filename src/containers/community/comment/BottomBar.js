/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import useComment from '../../../modules/queries/commentQuery';
import useReply from '../../../modules/queries/replyQuery';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PostDetailSelector } from '../../../modules/Community/postDetail';
import { Bar } from '../../../styles/Community/CommentBarStyle';

export const BottomBar = () => {
  const content = useSelector(PostDetailSelector('Comment', 'content'));
  const isReply = useSelector(PostDetailSelector('Comment', 'isReply'));
  const [inputValue, setInputValue] = useState();
  const [isActive, setIsActive] = useState(false);
  const { mutate } = useComment();
  const sendReply = useReply().mutate;

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
    if (isReply) {
      sendReply({ inputValue });
    } else {
      mutate({ inputValue });
    }
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
