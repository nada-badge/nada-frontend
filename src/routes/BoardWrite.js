/* BoardWrite.js 게시물 추가 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSubmit from '../modules/queries/boardWriteQuery';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BoardWrite = () => {
  const navigate = useNavigate();

  const { mutate } = useSubmit();

  const [board, setBoard] = useState({ // 1)보드값을 ""로 초기화
    scheduleName: "" ,
    groupName: "" ,
    field: "" ,
    category: "" ,
    area: "" ,
    content: "" ,
  });

  const [startedAt, setStartedAt] = useState(new Date());
  const [endedAt, setEndedAt] = useState(new Date());

  const onChange = (event) => {
    const { value, name } = event.target; //2) event.target에서 name과 value만 가져오기

    setBoard({    // 3) 해당 name에 value값 할당
      ...board,
      [name]: value,
    });

  };

  const backToList = () => { //4) 게시물 리스트 화면으로 돌아가기
    navigate('/board');
  };

  const onSubmit = (e) =>{ //폼을 제출하여 게시물 등록하기 위한 mutate 호출
    e.preventDefault();
    const scheduleName = e.target.scheduleName.value;
    const groupName = e.target.groupName.value;
    const field = e.target.field.value;
    const category = e.target.category.value;
    const area = e.target.area.value;
    const content = e.target.content.value;
    const startedAt = new Date(e.target.startedAt.value);
    const endedAt = new Date(e.target.endedAt.value);

    const start = startedAt.toISOString();
    const ended = endedAt.toISOString();

    console.log("onSubmit : ", scheduleName," : ", groupName," : ", field," : ", category," : ", area," : ", content," : ", start," : ", ended)

     if (scheduleName  && groupName && field && category && area && content ) {
    mutate({scheduleName,  groupName, field, category, area, content, start, ended})
    }
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
          value={board.scheduleName}
          required
        />
      </div>
      <br />
      <div>
        <span>주최사</span>
        <input 
          type="String"
          name="groupName"
          onChange={onChange}
          value={board.groupName}
          required
        />
      </div>
      <div>
        <span>분야</span>
        <input  type="String" 
        name="field" 
        onChange={onChange}
        value={board.field}
        required />
      </div>
      <div>
        <span>일정 카테고리</span>
        <input 
          type="String"
          name="category"
          onChange={onChange}
          value={board.category}
          required
        />
      </div>
      <div>
        <span>장소</span>
        <input  
        type="String" 
        name="area" 
        onChange={onChange}
        value={board.area}
        required />
      </div>
      <div>
        <span>세부 사항</span>
        <input 
          type="String"
          name="content"
          onChange={onChange}
          value={board.content}
          required
        />
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
          name = "startedAt"
          onChange={(date) => setStartedAt(date)}
          value={startedAt}        
        />
        <DatePicker
          selected={endedAt}
          name = "endedAt"
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

export default BoardWrite;
