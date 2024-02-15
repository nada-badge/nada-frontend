import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import useDeleteId from '../../modules/queries/useDeleteId';
import { YYYYdotMMdotDate } from '../../modules/common/formatDate';

export const NoticeContent = ({ data }) => {
  const { mutate } = useDeleteId();

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
        <button>수정</button>
        <button onClick={onDelete}>삭제</button>
        {YYYYdotMMdotDate(data.registeredAt)}
      </div>
    </Layout>
  );
};

const Layout = styled.div`
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
