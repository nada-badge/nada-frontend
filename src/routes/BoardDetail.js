/* BoardDetail.js */
import Board from '../components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm } from '../modules/schedule';
import { useNavigate } from 'react-router-dom';
import { idSelector } from '../modules/schedule';
import client from '../lib/api/client';

const BoardDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector(idSelector);

  const initialize = () => {
    dispatch(initializeForm('activities'));
  }

  const DeleteAct = () => {

    client.delete('/schedule', {data :{_id : id}});
    
    initialize();
    alert('삭제되었습니다.');
    navigate('/board');
    
  }

  const UpdateAct = () => {
    console.log("updateact가 실행되었습니다.");
    navigate('/update');
  }

 

  return (
    <div>
    <div>
        <Board/>
    </div>
    <button onClick={UpdateAct}>수정</button>
    <button onClick={DeleteAct}>삭제</button>
    </div>
  );
};

export default BoardDetail;
