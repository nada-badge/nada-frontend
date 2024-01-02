import styled from 'styled-components';
import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../components/search/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import RecentActivityItem from '../../components/cardList/RecentActivityItem';
import Filter from '../../components/common/filter/Filter';
import ActivityItem from '../../components/cardList/ActivityItem';
import { Grid } from 'react-virtualized';
import { useGetActivities } from '../../modules/activity/useGetActivities';
import { AlignBox } from '../../components/badge/AlignBox';
import { useNavigate } from 'react-router-dom';
import { changeField } from '../../modules/search/search';

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
  const cards = JSON.parse(
    localStorage.getItem('recentActivitiesMap'),
  ).reverse();

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

  useEffect(() => {
    dispatch(changeField({ value: '' }));
  }, []);

  const rowCount = Math.ceil(activities.length / 2);

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/activity/search');
  };

  return (
    <ActivityContainer>
      <SearchInput onSubmit={onSubmit} />
      <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
        <RecentActivityItem cards={cards} />
      </CardList>
      <div>
        <div className="filter">
          <Filter />
          <AlignBox text={'최신 순'} />
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
