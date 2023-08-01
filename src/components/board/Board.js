/* Board.js 상세보기에 해당하는 데이터를 받아 화면에 출력할 컴포넌트*/
import React from 'react';
import { useSelector } from 'react-redux';

console.log("board가 실행되었습니다.")
const Board = () => {

  // 1) useSelector 를 통해 클릭된 활동의 세부 값을 shcedule에서 board로 받아온다.
  const { scheduleName, groupId, groupName, field, category, area, content, startedAt, endedAt, registeredAt, updatedAt } = useSelector(({ schedule }) => ({
    scheduleName: schedule.activities.scheduleName,
    groupId: schedule.activities.groupId,
    groupName: schedule.activities.groupName,
    field: schedule.activities.field,
    category: schedule.activities.category,
    area: schedule.activities.area,
    content: schedule.activities.content,
    startedAt: schedule.activities.startedAt,
    endedAt: schedule.activities.endedAt,
    registeredAt: schedule.activities.registeredAt,
    updatedAt: schedule.activities.updatedAt
  }));



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
