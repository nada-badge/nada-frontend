// ActivitiyPage 하단 액티비티 보여주는 리스트
import { FixedSizeGrid as Grid } from 'react-window';
import ActivityItem from '../components/ActivityItem';
import { ErrorMessage } from '../../containers/common/ErrorMessage';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

const AcitivityList = ({ activities, isError }) => {
  const [columnCount, setColumnCount] = useState(2);

  useLayoutEffect(() => {
    const handleResize = () => {
      // 화면 너비를 가져오기
      const screenWidth = window.innerWidth;
      // 화면 너비가 992px 이상,  columnCount = 4로 이하 =2로 설정
      if (screenWidth >= 800) {
        setColumnCount(4);
      } else if (screenWidth <= 800 && screenWidth >= 600) {
        setColumnCount(3);
      } else {
        setColumnCount(2);
      }
    };

    // 페이지 로드, 화면 크기가 변경시 handleResize 함수 호출.
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isError) {
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  }

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const activity = activities[index];
    return (
      <div
        className="cellItem"
        style={{
          ...style,
          boxSizing: 'border-box',
          paddingRight: '12px',
          paddingBottom: '12px',
        }}
        key={index}
      >
        {activity && <ActivityItem cards={activity} />}
      </div>
    );
  };

  return (
    <div>
      <Grid
        className="gridContainer"
        columnCount={columnCount}
        columnWidth={182} // 343 / 2
        height={Math.ceil(activities.length / columnCount) * 222}
        rowCount={Math.ceil(activities.length / columnCount)}
        rowHeight={234}
        width={375}
        style={{ boxSizing: 'border-box', paddingTop: '12px' }}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default AcitivityList;
