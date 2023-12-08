/** ReplyNoticeBar 답글 알림창 */
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { initializeForm } from '../../../modules/community/postDetail';

const ReplyNoticeBar = ({ name }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(initializeForm({ form: 'Comment' }));
  };

  return (
    <Bar>
      <div className="text">
        <div className="name">@{name}</div>
        <div className="content">님에게 답글 남기는 중</div>
      </div>
      <div className="img" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
        >
          <path
            stroke="#888"
            stroke-width="1.01015"
            d="M12.89 4 4 13m9 0L4.11 4"
          />
        </svg>
      </div>
    </Bar>
  );
};

export default ReplyNoticeBar;

const Bar = styled.div`
  height: 18px;
  position: relative;
  width: 345px;

  & > .text {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    left: 0;
    position: absolute;
    top: 0;

    & > .name {
      color: var(--myspec-primaryblue-1);
      font-family: var(--caption-02-font-family);
      font-size: var(--caption-02-font-size);
      font-style: var(--caption-02-font-style);
      font-weight: var(--caption-02-font-weight);
      letter-spacing: var(--caption-02-letter-spacing);
      line-height: var(--caption-02-line-height);
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
    & > .content {
      color: var(--myspec-gray-scalegray-600);
      font-family: var(--caption-02-font-family);
      font-size: var(--caption-02-font-size);
      font-style: var(--caption-02-font-style);
      font-weight: var(--caption-02-font-weight);
      letter-spacing: var(--caption-02-letter-spacing);
      line-height: var(--caption-02-line-height);
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
  & > .img {
    height: 17px;
    left: 328px;
    position: absolute;
    top: 1px;
    width: 17px;
  }
`;
