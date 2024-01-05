import InfoContainer from '../../containers/activity/InfoContainer.js';
import Thumbnail from '../../containers/activity/Thumbnail.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useActivity } from '../../modules/queries/activity/useGetActivity.js';
import { calculateDday } from '../../modules/activity/calculateDday.js';

const DetailContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  padding-bottom: 88px;

  & > div {
    background-color: white;
  }
`;

const DetailActivityPage = () => {
  const params = useParams();
  const { data, isLoading, isError } = useActivity({ _id: params._id });
  const [info, setInfo] = useState();

  // '최근 본 활동'으로 등록하기
  useEffect(() => {
    if (info) {
      // recentActivitiesMap 불러오기
      const recentActivitiesMap = new Map(
        JSON.parse(localStorage.getItem('recentActivitiesMap')) || [],
      );

      // 기존 게시글 삭제하기 (중복제거)
      recentActivitiesMap.delete(info._id);

      // 새로운 활동 추가하기
      recentActivitiesMap.set(info._id, {
        title: info.activityName,
        team: info.groupName,
        Dday: calculateDday(info.endedAt),
        views: info.views,
      });

      // 3개 이상이면, 삭제하기
      if (recentActivitiesMap.size > 3) {
        const oldestKey = [...recentActivitiesMap.keys()].shift();
        recentActivitiesMap.delete(oldestKey);
      }

      localStorage.setItem(
        'recentActivitiesMap',
        JSON.stringify([...recentActivitiesMap]),
      );
    }
  }, [info]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'back',
        text: '활동 정보',
        isShowBottom: true,
      }),
    );
  }, []);

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }

    setInfo(data);
  }, [data]);

  return (
    <DetailContainer>
      {info && <Thumbnail info={info} />}
      {info && <InfoContainer info={info} />}
    </DetailContainer>
  );
};

export default DetailActivityPage;
