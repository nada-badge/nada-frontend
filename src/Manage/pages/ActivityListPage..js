/* ManageActivityList 관리자가 현재 등록되어있는 activity 리스트를 볼 수 있는 페이지 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import AcitivityList from '../../Acitivity/container/AcitivityList';
import { useActivityList } from '../../Acitivity/modules/queries/useGetActivity';
import { changeField } from '../../modules/redux/postWrite';

const ManageActivityList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const { data, isError } = useActivityList();

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  //해당 화면의 상단, 하단바 설정
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '게시물 목록',
        isShowBottom: false,
      }),
    );
  }, []);

  const MoveToWrite = () => {
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: true }));
    navigate('/activity/ActWrite');
  };

  return (
    <div className="pageContainer">
      <button onClick={MoveToWrite}>글쓰기</button>
      <AcitivityList activities={activities} isError={isError} />
    </div>
  );
};

export default ManageActivityList;
