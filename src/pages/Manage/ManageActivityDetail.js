/* ManageActivityDetail 관리자가 activity의 세부사항을 확인하고 수정, 삭제할 수 있는 페이지 */
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, idSelector } from '../../modules/ManageActivity';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import client from '../../lib/api/client';

const ManageActivityDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector(idSelector);

  //선택된 게시물 정보 가져오기
  const activity = useSelector(({ activity }) => activity.activities);

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
  } = activity;

  const initialize = () => {
    dispatch(initializeForm('activities'));
  };

  //게시물 삭제
  const handleDelete = useCallback(async () => {
    try {
      await client.delete('/activity', { data: { _id: id } });
      dispatch(initializeForm('activities'));
      initialize();
      alert('삭제되었습니다.');
      navigate('/manage/Activity');
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
    }
  }, [id, navigate]);

  //게시물 수정 페이지로 이동
  const UpdateAct = useCallback(() => {
    navigate('/manage/ActivityWrite');
  }, []);

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
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default ManageActivityDetail;
