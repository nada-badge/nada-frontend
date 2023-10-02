/* ActivityWrite.js 게시물 추가 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSubmit from '../modules/queries/ActivityWriteQuery';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ManageActivityWrite = () => {
  const navigate = useNavigate();

  const { mutate } = useSubmit();

  const [board, setBoard] = useState({
    // 1)보드값을 ""로 초기화
    activityName: '',
    groupName: '',
    field: '',
    category: '',
    area: '',
    content: '',
  });

  const [startedAt, setStartedAt] = useState(new Date());
  const [endedAt, setEndedAt] = useState(new Date());

  const onChange = (event) => {
    const { value, name } = event.target; //2) event.target에서 name과 value만 가져오기

    setBoard({
      // 3) 해당 name에 value값 할당
      ...board,
      [name]: value,
    });
  };

  const backToList = () => {
    //4) 게시물 리스트 화면으로 돌아가기
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
          value={board.name}
          required
        />
      </div>
    );
  };

  const onSubmit = (e) => {
    //5) 폼을 제출하여 게시물 등록하기 위한 mutate 호출
    e.preventDefault();
    const activityName = e.target.activityName.value;
    const groupName = e.target.groupName.value;
    const field = e.target.field.value;
    const category = e.target.category.value;
    const area = e.target.area.value;
    const content = e.target.content.value;
    const startedAt = new Date(e.target.startedAt.value);
    const endedAt = new Date(e.target.endedAt.value);

    const start = startedAt.toISOString();
    const ended = endedAt.toISOString();

    mutate({
      activityName,
      groupName,
      field,
      category,
      area,
      content,
      start,
      ended,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>{output('활동 제목', 'activityName')}</div>
        <br />
        <div>{output('주최사', 'groupName')}</div>
        <div>{output('분야', 'field')}</div>
        <div>{output('일정 카테고리', 'category')}</div>
        <div>{output('장소', 'area')}</div>
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
          <button>등록하기</button>
        </div>
      </form>
      <button onClick={backToList}>취소</button>
    </div>
  );
};

export default ManageActivityWrite;
