import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const NoticeContent = () => {
  return (
    <div className="pageContainer">
      <Layout>
        <div className="title">공지사항 제목을 작성해주세요</div>
        <div className="content">
          본문 내용입니다.본문 내용입니다.본문 .....
        </div>
        <div className="date">2023.01.01</div>
      </Layout>
    </div>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 90px;
  padding: 13px 15px;
  box-sizing: border-box;

  & > .title {
    ${applyFontStyles({
      font: 'subtitle-03',
      color: 'var(--myspec-gray-scalegray-900)',
    })}
  }
  & > .content {
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
