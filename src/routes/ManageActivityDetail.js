/* ActivityDetail.js activity의 세부사항을 확인하고 수정, 삭제할 수 있는 페이지 */
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm } from '../modules/activity';
import { useNavigate } from 'react-router-dom';

import { idSelector } from '../modules/activity';
import client from '../lib/api/client';

const ManageActivityDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector(idSelector); //1) 해당 페이지의 id를 받아옴

  const {
    activityName,
    groupName,
    field,
    category,
    area,
    content,
    startedAt,
    endedAt,
    registeredAt,
    updatedAt,
  } = useSelector(({ activity }) => ({
    activityName: activity.activities.activityName,
    groupName: activity.activities.groupName,
    field: activity.activities.field,
    category: activity.activities.category,
    area: activity.activities.area,
    content: activity.activities.content,
    startedAt: activity.activities.startedAt,
    endedAt: activity.activities.endedAt,
    registeredAt: activity.activities.registeredAt,
    updatedAt: activity.activities.updatedAt,
  }));

  const initialize = () => {
    dispatch(initializeForm('activities'));
  };

  const DeleteAct = () => {
    //2) 해당 페이지를 삭제하고 현 activity 리덕스값도 초기화

    client.delete('/activity', { data: { _id: id } });

    initialize();
    alert('삭제되었습니다.');
    navigate('/manage/Activity');
  };

  const UpdateAct = () => {
    navigate('/manage/ActivityUpdate');
  };

  return (
    <div>
      <div>
        <div>
          <h2>{activityName}</h2>
          <h5>{groupName}</h5>
          <h5>{field}</h5>
          <h5>{category}</h5>
          <h5>{area}</h5>
          <h5>{content}</h5>
          <h5>{startedAt}</h5>
          <h5>{endedAt}</h5>
          <h5>{registeredAt}</h5>
          <h5>{updatedAt}</h5>
        </div>
      </div>
      <button onClick={UpdateAct}>수정</button>
      <button onClick={DeleteAct}>삭제</button>
    </div>
  );
};

export default ManageActivityDetail;
