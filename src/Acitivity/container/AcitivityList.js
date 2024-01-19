// ActivitiyPage 하단 액티비티 보여주는 리스트
import { FixedSizeGrid as Grid } from 'react-window';
import ActivityItem from '../components/ActivityItem';
import { ErrorMessage } from '../../containers/common/ErrorMessage';

const AcitivityList = ({ activities, isError }) => {
  if (isError) {
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  }

  const Cell = ({ columnIndex, rowIndex, style }) => {
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
        key={index}
      >
        {activity && <ActivityItem cards={activity} />}
      </div>
    );
  };

  return (
    <div>
      <Grid
        columnCount={2}
        columnWidth={182}
        height={Math.ceil(activities.length / 2) * 222}
        rowCount={Math.ceil(activities.length / 2)}
        rowHeight={234}
        width={375}
        style={{ boxSizing: 'border-box', padding: '12px' }}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default AcitivityList;
