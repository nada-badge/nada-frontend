/* ActivityList.js 게시물 조회 */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../modules/activity.js';
import client from '../lib/api/client.js';

const ManageActivityList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  //1) activity 데이터를 받아옴
  useEffect(() => {
    const FetchData = async () => {
      try {
        const resp = await client.get('activity/list');
        setBoardList(resp.data.activities);
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  }, []);

  if (!boardList) {
    return null;
  }

  const MoveToWrite = () => {
    dispatch(initializeForm('activities'));
    navigate('/manage/ActivityWrite');
  };

  const setData = (activity) => {
    dispatch(changeField({ form: 'activities', value: activity }));
  };

  return (
    <div>
      게시판 목록이 나오는 곳입니다.
      <ul>
        {boardList &&
          boardList.map((activity) => (
            // 2) map 함수로 데이터 출력
            <li key={activity._id}>
              <Link
                onClick={() => setData(activity)} //3) 리덕스 activities에 클릭된 활동 데이터를 삽입
                to={`/manage/Activity/${activity._id}`}
              >
                {activity.activityName}
              </Link>
            </li> // 4)클릭한 활동 주소로 이동
          ))}
      </ul>
      <div>
        <button onClick={MoveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default ManageActivityList;
