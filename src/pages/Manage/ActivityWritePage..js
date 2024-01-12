/* ManageActivityWrite 관리자가 activity를 추가하거나 수정할 수 있는 페이지 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import usePostManage from '../../modules/queries/manage/usePostManage';
import usePatchManage from '../../modules/queries/manage/usePatchManage';
import { activitySelector } from '../../modules/activity';
import { changeBarStatus } from '../../modules/bar';

const ManageActivityWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = usePostManage();
  const update = usePatchManage().mutate;

  const [board, setBoard] = useState(
    useSelector(({ activity }) => activity.activities),
  );
  const isSubmit = useSelector(activitySelector('method', 'isSubmit'));

  const [startedAt, setStartedAt] = useState(new Date());
  const [endedAt, setEndedAt] = useState(new Date());

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '게시물 등록',
        isShowBottom: false,
      }),
    );
  }, []);

  //입력값이 바뀔때마다 setBoard해주기
  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const backToList = () => {
    navigate('/manage/Activity');
  };

  const output = (title, name) => {
    return (
      <div>
        <span>{title}</span>
        <input
          type="String"
          name={name}
          onChange={onChange}
          value={board[name]}
          required
        />
      </div>
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { _id, activityName, groupName, field, category, region, content } =
      board;
    const start = new Date(e.target.startedAt.value).toISOString();
    const ended = new Date(e.target.endedAt.value).toISOString();
    if (isSubmit) {
      mutate({
        activityName,
        groupName,
        field,
        category,
        region,
        content,
        start,
        ended,
      });
    } else {
      update({
        _id,
        activityName,
        groupName,
        field,
        category,
        region,
        content,
        start,
        ended,
      });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>{output('활동 제목', 'activityName')}</div>
        <br />
        <div>{output('주최사', 'groupName')}</div>
        <div>{output('분야', 'field')}</div>
        <div>{output('일정 카테고리', 'category')}</div>
        <div>{output('장소', 'region')}</div>
        <div>{output('세부 사항', 'content')}</div>

        {/*<div>
        <span>이미지 첨부</span>
        <input
          type="file"
          accept="image/*"
          name="image"
          value={image}
          onChange={onChange}
          required
        />
      </div>이미지 파일 받는 코드인데, 추후 수정 추가 예정*/}
        <div>
          활동 기간
          <DatePicker
            selected={startedAt}
            name="startedAt"
            onChange={(date) => setStartedAt(date)}
            value={startedAt}
          />
          <DatePicker
            selected={endedAt}
            name="endedAt"
            onChange={(date) => setEndedAt(date)}
            value={endedAt}
          />
        </div>

        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>
      <button onClick={backToList}>취소</button>
    </div>
  );
};

export default ManageActivityWrite;
