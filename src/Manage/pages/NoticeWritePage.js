/**NoticeWritePage 관리자용 공지사항 작성 페이지 */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LayoutStyle } from './HomePage.';
import Header from '../containers/Header';
import usePostNotice from '../modules/queries/usePostNotice';
import usePatchNotice from '../modules/queries/usePatchNotice';
import { applyFontStyles } from '../../styles/fontStyle';
import { postWriteSelector } from '../../modules/redux/postWrite';

const NoticeWritePage = () => {
  const navigate = useNavigate();
  const { mutate: post } = usePostNotice();
  const { mutate: update } = usePatchNotice();
  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const postData = useSelector(({ postData }) => postData.postData.data);
  const [input, setInput] = useState({
    title: postData.title,
    content: postData.content,
  });

  const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    ...applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };
  const inputstyle = {
    width: '300px',
    ...applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };
  const onChange = (event) => {
    const { value, name } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    isSubmit
      ? post({ title: input.title, content: input.content })
      : update({
          _id: postData._id,
          title: input.title,
          content: input.content,
        });

    setInput({
      title: '',
      content: '',
    });
    navigate('/manage/notice');
  };

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={''} />
      <form style={form} onSubmit={onSubmit}>
        제목
        <input
          id="title"
          name="title"
          style={inputstyle}
          value={input.title}
          onChange={onChange}
          required
        />
        내용
        <textarea
          id="content"
          name="content"
          style={inputstyle}
          value={input.content}
          onChange={onChange}
          required
        />
        <button>등록</button>
      </form>
    </LayoutStyle>
  );
};

export default NoticeWritePage;
