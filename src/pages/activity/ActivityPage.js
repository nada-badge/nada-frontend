import styled from 'styled-components';
import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../components/search/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import RecentActivityItem from '../../components/cardList/RecentActivityItem';
import Filter from '../../containers/community/Filter';
import ActivityItem from '../../components/cardList/ActivityItem';
import { Grid } from 'react-virtualized';
import { useGetActivities } from '../../modules/activity/useGetActivities';

const ActivityContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  text-align: left;
  padding-bottom: 85px; // 하단 바

  & > div {
    background-color: white;

    & > .filter {
      padding: 12px;
    }
  }
`;

const ActivityPage = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const data = useGetActivities();

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  // 최근 본 게시글
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

  const cellRenderer = useCallback(
    ({ columnIndex, key, rowIndex, style }) => {
      const index = rowIndex * 2 + columnIndex;
      const activity = activities[index];
      return (
        <div
          style={{
            ...style,
            boxSizing: 'border-box',
            paddingRight: '12px',
            paddingBottom: '12px',
          }}
          key={key}
        >
          {activity && <ActivityItem cards={activity} />}
        </div>
      );
    },
    [activities],
  );

  const rowCount = Math.ceil(activities.length / 2);

  return (
    <ActivityContainer>
      <SearchInput />
      <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
        <RecentActivityItem cards={cards} />
      </CardList>
      <div>
        <div className="filter">
          <Filter />
        </div>
        <Grid
          cellRenderer={cellRenderer}
          columnCount={2}
          columnWidth={182}
          height={rowCount * 222}
          rowCount={rowCount}
          rowHeight={234}
          width={375}
          style={{ boxSizing: 'border-box', padding: '0px 12px' }}
        />
      </div>
    </ActivityContainer>
  );
};

export default ActivityPage;
