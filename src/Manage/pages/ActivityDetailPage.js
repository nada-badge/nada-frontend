/* ManageActivityDetail 관리자가 activity의 세부사항을 확인하고 수정, 삭제할 수 있는 페이지 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, changeField } from '../../Acitivity/modules/activity';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import client from '../../lib/api/client';

const ManageActivityDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //선택된 게시물 정보 가져오기
  const activity = useSelector(({ activity }) => activity.activities);

  const {
    _id,
    activityName,
    groupName,
    field,
    category,
    region,
    content,
    startedAt,
    endedAt,
    registeredAt,
    updatedAt,
  } = activity;

  const initialize = () => {
    dispatch(initializeForm('activities'));
  };

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '게시물 정보',
        isShowBottom: false,
      }),
    );
  }, []);

  //게시물 삭제
  const handleDelete = useCallback(async () => {
    try {
      await client.delete('/activity', { data: { _id: _id } });
      initialize();
      alert('삭제되었습니다.');
      navigate('/manage/Activity');
    } catch (error) {
      alert('실패!');
      console.error('삭제 중 오류 발생:', error);
    }
  }, [_id]);

  //게시물 수정 페이지로 이동
  const UpdateAct = useCallback(() => {
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: false }));
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
          <h5>{region}</h5>
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
