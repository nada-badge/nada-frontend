/**NoticeContent 관리자용 공지사항 출력 컴포넌트 */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { applyFontStyles } from '../../styles/fontStyle';
import useDeleteId from '../../modules/queries/useDeleteId';
import { YYYYdotMMdotDate } from '../../modules/common/formatDate';
import { changePostDataField } from '../../modules/redux/postData';
import { changeField } from '../../modules/redux/postWrite';

export const NoticeContent = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useDeleteId();

  const onUpdate = () => {
    dispatch(changePostDataField({ value: data }));
    dispatch(
      changeField({
        form: 'method',
        key: 'isSubmit',
        value: false,
      }),
    );
    navigate('/manage/notice/write');
  };

  const onDelete = () => {
    mutate({
      url: '/mypage/notice',
      _id: data._id,
    });
  };

  return (
    <Layout>
      <div className="title">{data.title}</div>
      <div className="content">{data.content}</div>
      <div className="bottom">
        <button onClick={onUpdate}>수정</button>
        <button onClick={onDelete}>삭제</button>
        {YYYYdotMMdotDate(data.registeredAt)}
      </div>
    </Layout>
  );
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;
  height: content-fit;
  padding: 13px 15px;
  box-sizing: border-box;
  background-color: white;
  text-align: left;
  border-bottom: 2px solid var(--myspec-gray-scale-gray-400, #d9d9d9);
  & > .title {
    ${applyFontStyles({
      font: 'subtitle-03',
      color: 'var(--myspec-gray-scalegray-900)',
    })}
  }
  & > .content {
    width: 900px;

    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })}
  }
  & > .bottom {
    margin-left: auto;
    display: flex;
    gap: 10px;
    ${applyFontStyles({
      font: 'caption-03',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
  }
`;
