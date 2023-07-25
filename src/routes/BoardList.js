import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { changeField, initializeForm } from '../modules/schedule.js';

const BoardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const resp = await axios.get('http://34.64.104.214:3000/schedule/list?groupName=NADA'); // 2) 게시글 목록 데이터에 할당
    setBoardList(resp.data.schedules); // 3) boardList 변수에 할당  
    console.log('getBoardList가 실행되었습니다');
  };

  const moveToWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div>
      게시판 목록이 나오는 곳입니다.
      <ul>
        {boardList && boardList.map((schedule) => (
            // 4) map 함수로 데이터 출력
            <li key={schedule._id}>
              <Link onClick={()=>{
                dispatch(changeField({ form: 'activities', value:schedule }))
            }} to={`/board/${schedule._id}`}>{schedule.scheduleName}</Link>
            </li>
          ))}
      </ul>
      <div>
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;
