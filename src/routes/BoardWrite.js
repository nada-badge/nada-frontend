/* BoardWrite.js 게시물 추가 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import client from '../lib/api/client';

import 'react-datepicker/dist/react-datepicker.css';

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    // 1)보드값을 null로 초기화
    scheduleName: null,
    groupId: null,
    groupName: null,
    field: null,
    category: null,
    area: null,
    content: null,
    registeredAt: null,
    updatedAt: null,
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

    console.log('Board : ', board);
    console.log('startedAt : ', startedAt);
  };

  const onSubmit = async () => {
    // 4) 입력받은 활동 값을 서버로 제출
    await client
      .post(`schedule`, {
        scheduleName: board.scheduleName,
        groupId: board.groupId,
        groupName: board.groupName,
        field: board.field,
        category: board.category,
        area: board.area,
        content: board.content,
        startedAt: startedAt.toISOString(),
        endedAt: endedAt.toISOString(),
      })
      .catch(function (error) {
        console.log(error.message);
        alert('실패.');
      })
      .then((res) => {
        alert('등록되었습니다.');
        navigate('/board');
      });
  }; // 리액트 쿼리 사용해서 분리하기 *숙제^ㅡ^ 리액트 쿼리에서 유즈뮤테이트 사용.ㅋ

  const backToList = () => {
    navigate('/board');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>활동 제목</span>
          <input
            type="String"
            name="scheduleName"
            onChange={onChange}
            //value={scheduleName}
            required
          />
        </div>
        <br />
        <div>
          <span>신청그룹</span>
          <input type="String" name="groupId" onChange={onChange} required />
        </div>
        <div>
          <span>주최사</span>
          <input type="String" name="groupName" onChange={onChange} required />
        </div>
        <div>
          <span>분야</span>
          <input type="String" name="field" onChange={onChange} required />
        </div>
        <div>
          <span>일정 카테고리</span>
          <input type="String" name="category" onChange={onChange} required />
        </div>
        <div>
          <span>장소</span>
          <input type="String" name="area" onChange={onChange} required />
        </div>
        <div>
          <span>세부 사항</span>
          <input type="String" name="content" onChange={onChange} required />
        </div>

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
          />
          <DatePicker
            selected={endedAt}
            name="endedAt"
            onChange={(date) => setEndedAt(date)}
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

export default BoardWrite;
