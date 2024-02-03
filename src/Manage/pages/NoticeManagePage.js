import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import Header from '../containers/Header';

const NoticeManagePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={'/community/PostWrite'} />
    </LayoutStyle>
  );
};

export default NoticeManagePage;

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 8px;
`;
