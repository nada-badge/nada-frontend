/* ActivityDetail.js activity의 세부사항을 확인하고 수정, 삭제할 수 있는 페이지 */
import ActivityBoard from '../components/Activityboard/ActivityBoard';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm } from '../modules/activity';
import { useNavigate } from 'react-router-dom';
import { idSelector } from '../modules/activity';
import client from '../lib/api/client';

const ActivityDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector(idSelector); //1) 해당 페이지의 id를 받아옴

  const initialize = () => {
    dispatch(initializeForm('activities'));
  }

  const DeleteAct = () => { //2) 해당 페이지를 삭제하고 현 activity 리덕스값도 초기화

    client.delete('/activity', {data :{_id : id}});
    
    initialize();
    alert('삭제되었습니다.');
    navigate('/Activity');
    
  }

  const UpdateAct = () => { 
    navigate('/ActivityUpdate');
  }

 

  return (
    <div>
    <div>
        <ActivityBoard/>
    </div>
    <button onClick={UpdateAct}>수정</button>
    <button onClick={DeleteAct}>삭제</button>
    </div>
  );
};

export default ActivityDetail;
