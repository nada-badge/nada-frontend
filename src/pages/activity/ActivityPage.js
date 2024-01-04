import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../components/search/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import RecentActivityItem from '../../components/cardList/RecentActivityItem';
import Filter from '../../components/common/filter/Filter';
import ActivityItem from '../../components/cardList/ActivityItem';
import { Grid } from 'react-virtualized';
import { AlignBox } from '../../components/badge/AlignBox';
import { useNavigate } from 'react-router-dom';
import { initialized } from '../../modules/search/search';
import { useActivityListQuery } from '../../modules/queries/ActivityQuery';
import '../../styles/Page.scss';

const ActivityPage = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const { data } = useActivityListQuery();

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  // 최근 본 게시글
  const recent = JSON.parse(localStorage.getItem('recentActivitiesMap'));

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bell',
        text: '활동',
        isShowBottom: true,
      }),
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

  // 검색 redux 초기화하기
  useEffect(() => {
    dispatch(initialized());
  }, []);

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/activity/search');
  };

  return (
    <div className="pageContainer">
      <SearchInput onSubmit={onSubmit} />
      {recent && (
        <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
          <RecentActivityItem cards={recent.reverse()} />
        </CardList>
      )}
      <div>
        <div style={{ padding: '12px' }}>
          <Filter />
          <AlignBox text={'최신 순'} />
        </div>
        <Grid
          cellRenderer={cellRenderer}
          columnCount={2}
          columnWidth={182}
          height={Math.ceil(activities.length / 2) * 222}
          rowCount={Math.ceil(activities.length / 2)}
          rowHeight={234}
          width={375}
          style={{ boxSizing: 'border-box', padding: '0px 12px' }}
        />
      </div>
    </div>
  );
};

export default ActivityPage;
