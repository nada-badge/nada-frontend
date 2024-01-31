/* ManageActivityList 관리자가 현재 등록되어있는 activity 리스트를 볼 수 있는 페이지 */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FixedSizeGrid as Grid } from 'react-window';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { useActivityList } from '../../Acitivity/modules/queries/useGetActivity';
import { changeField } from '../../modules/redux/postWrite';
import ActivityItem from '../../Acitivity/components/ActivityItem';
import { LinkButton } from '../components/LinkButton';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { TextWarpper } from '../../Community/styles/SelectButton';

const ManageActivityList = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const { data, isError } = useActivityList();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex;
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

  const MoveToWrite = () => {
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: true }));
  };

  return (
    <LayoutStyle>
      <div className="header">활동 게시글</div>
      <LinkButton url={'/manage'} text={'뒤로 가기 '} Direction="left" />
      <LinkButton
        onClick={MoveToWrite}
        url={'/activity/ActWrite'}
        text={'게시글 작성하기'}
      />

      <TextWarpper>신고된 게시글</TextWarpper>
      <Grid
        columnCount={6}
        columnWidth={182}
        height={Math.ceil(activities.length / 6) * 222}
        rowCount={Math.ceil(activities.length / 4)}
        rowHeight={234}
        width={1125}
        style={{ boxSizing: 'border-box', padding: '12px' }}
      >
        {Cell}
      </Grid>
    </LayoutStyle>
  );
};

export default ManageActivityList;

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 8px;

  & > .header {
    padding: 20px;
    ${applyFontStyles({ font: 'title-02' })};
  }
`;
