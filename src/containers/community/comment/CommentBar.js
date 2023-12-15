/** CommentBar 댓글 입력창 */
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { InputBar, Img } from '../../../styles/community/CommentBarStyle';

const CommentBar = ({
  inputValue,
  onChange,
  sendComment,
  isReplying,
  name,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!inputValue);
  }, [inputValue]);

  return (
    <InputBar>
      <div className="input">
        <div className="text">
          {isReplying && <div className="name">@{name}</div>}
          <input
            className="wrapper"
            onChange={onChange}
            value={inputValue}
            placeholder="댓글을 입력하세요"
          />
        </div>
      </div>
      <Img
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        fill="none"
        className={classNames({ isActive })}
        onClick={sendComment}
      >
        <rect className="background" fill="#F8F8F8" rx="12" />
        <path
          className="arrow"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeWidth="2"
          d="m12 17 6-6 6 6m-6-4v12"
        />
      </Img>
    </InputBar>
  );
};

export default CommentBar;
