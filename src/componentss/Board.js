/* Board.js */
//상세보기에 해당하는 데이터를 받아 화면에 출력할 컴포넌트
import React from 'react';
import { useSelector } from 'react-redux';

console.log("board가 실행되었습니다.")


const Board = () => {

  const scheduleName = useSelector(state => state.schedule.activities.scheduleName);
  const groupId = useSelector(state => state.schedule.activities.groupId);
  const groupName = useSelector(state => state.schedule.activities.groupName);
  const field = useSelector(state => state.schedule.activities.field);
  const category = useSelector(state => state.schedule.activities.category);
  const area = useSelector(state => state.schedule.activities.area);
  const content = useSelector(state => state.schedule.activities.content);
  const startedAt = useSelector(state => state.schedule.activities.startedAt);
  const endedAt = useSelector(state => state.schedule.activities.endedAt);
  const registeredAt = useSelector(state => state.schedule.activities.registeredAt);
  const updatedAt = useSelector(state => state.schedule.activities.updatedAt);

  return (
    <div>
      <h2>{scheduleName}</h2>
      <h5>{groupId}</h5>
      <h5>{groupName}</h5>
      <h5>{field}</h5>
      <h5>{category}</h5>
      <h5>{area}</h5>
      <h5>{content}</h5>
      <h5>{startedAt}</h5>
      <h5>{endedAt}</h5>
      <h5>{registeredAt}</h5>
      <h5>{updatedAt}</h5>
    </div>
  );
};

export default Board;
