/* ManageActivityList 관리자가 현재 등록되어있는 activity 리스트를 볼 수 있는 페이지 */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/barStatus';
import { changeField, initializeForm } from '../../modules/ManageActivity.js';
import client from '../../lib/api/client.js';

const ManageActivityList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  //해당 화면의 상단, 하단바 설정
  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'back', text: '활동', isShowBottom: false }),
    );

    //activity 게시물 리스트 가져오기
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

  //선택된 게시물의 정보를 manageActivity로 dispatch
  const setData = (activity) => {
    dispatch(changeField({ form: 'activities', value: activity }));
  };

  return (
    <div>
      게시판 목록
      <ul>
        {boardList &&
          boardList.map((activity) => (
            <li key={activity._id}>
              <Link
                onClick={() => setData(activity)}
                to={`/manage/Activity/${activity._id}`}
              >
                {activity.activityName}
              </Link>
            </li>
          ))}
      </ul>
      <div>
        <button onClick={MoveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default ManageActivityList;
