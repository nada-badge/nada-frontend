import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalBackGround = styled.div`
  background-color: rgba(136, 136, 136, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 375px;
  height: 100%;
  position: fixed;
  z-index: 3;

  & > .titleWrapper {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px -4px 12px #0000000a;
    height: 400px;
    overflow: hidden;
    position: fixed;
    top: 206px;
    width: 358px;

    & > h2 {
      color: #000000;
      font-family: var(--title-02-font-family);
      font-size: var(--title-02-font-size);
      font-weight: var(--title-02-font-weight);
      letter-spacing: var(--title-02-letter-spacing);
      line-height: var(--title-02-line-height);
      text-align: center;
      top: 24px;
      white-space: nowrap;
      width: 100%;
    }
  }
`;

const DetailEvent = ({ date }) => {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const dateSet = date.split('-');
    setTitle(dateSet[1] + '월 ' + dateSet[2] + '일');
  }, [date]);

  return (
    <>
      <ModalBackGround>
        <div className="titleWrapper">
          <h2>{title}</h2>
        </div>
      </ModalBackGround>
    </>
  );
};

export default DetailEvent;
