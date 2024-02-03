import { useState } from 'react';
import styled from 'styled-components';
import Header from '../containers/Header';

const NoticeWritePage = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const form = {
    display: 'flex',
    justifyContent: 'column',
  };

  const onChange = (event) => {
    const { value, name } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={''} />
      <form style={form}>
        제목
        <input
          id="title"
          name="title"
          value={input.title}
          onChange={onChange}
        />
        내용
        <textarea
          id="content"
          name="content"
          value={input.content}
          onChange={onChange}
        />
        <button>등록</button>
      </form>
    </LayoutStyle>
  );
};

export default NoticeWritePage;

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 8px;
`;
