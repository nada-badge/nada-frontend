import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const NoticeContent = ({ data }) => {
  return (
    <Layout>
      <div className="title">{data.title}</div>
      <div className="content">{data.content}</div>
      <div className="date">{data.registeredAt}</div>
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
  & > .date {
    margin-left: auto;
    ${applyFontStyles({
      font: 'caption-03',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
  }
`;
