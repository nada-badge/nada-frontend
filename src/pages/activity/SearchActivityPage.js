import styled from 'styled-components';
import { SearchInput } from '../../components/SearchInput';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/bar';

const Container = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 375px;
  height: 100vh; // 수정가능

  & > div {
    background-color: white;
  }
`;

const SearchActivityPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'bell', text: '활동', isShowBottom: true }),
    );
  }, []);

  return (
    <Container>
      <SearchInput />
      {/* 제목, 본문 , 작성자 */}
      {/* 최신순 (정렬) */}
      {/* 활동 리스트 */}
    </Container>
  );
};

export default SearchActivityPage;
