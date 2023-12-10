import styled from 'styled-components';
import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../components/search/SearchInput';
import { useEffect } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import RecentActivityItem from '../../components/cardList/RecentActivityItem';

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
      _id: '65617b6a9c6d76464c132459',
      title: '2023년 성북구 청년소셜 커뮤니티',
      team: '청년재단',
      Dday: 14,
      see: 307,
    },
    { _id: 2, title: '강북구 청년소셜', team: '재단', Dday: 114, see: 37 },
    {
      _id: 3,
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
      <SearchInput />
      <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
        <RecentActivityItem cards={cards} />
      </CardList>
    </ActivityContainer>
  );
};

export default ActivityPage;
