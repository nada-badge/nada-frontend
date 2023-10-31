import styled from 'styled-components';
import CardList from '../../components/cardList/CardList';
import { useEffect } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';

const ActivityContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;

  & > div {
    background-color: white;
  }
`;

const ActivityPage = () => {
  const dispatch = useDispatch();

  const cards = [
    {
      id: 1,
      title: '2023년 성북구 청년소셜 커뮤니티',
      team: '청년재단',
      Dday: 14,
      see: 307,
    },
    { id: 2, title: '강북구 청년소셜', team: '재단', Dday: 114, see: 37 },
    {
      id: 3,
      title: '2023년 성북구 청년소셜',
      team: '청년재단',
      Dday: 14,
      see: 307,
    },
  ];

  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'bell', text: '활동', isShowBottom: true }),
    );
  }, []);

  return (
    <ActivityContainer>
      {/* 검색창 */}
      <CardList title={'최근 본 활동'} cards={cards} type={'recentActivity'} />
      {/*  대외활동 리스트 */}
    </ActivityContainer>
  );
};

export default ActivityPage;
