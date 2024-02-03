import styled from 'styled-components';
import Header from '../containers/Header';

const NoticeWritePage = () => {
  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={''} />
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
