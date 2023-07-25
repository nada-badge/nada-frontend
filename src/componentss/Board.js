/* Board.js */
//상세보기에 해당하는 데이터를 받아 화면에 출력할 컴포넌트
import React from 'react';

const Board = ({
  _id,
  scheduleName,
  groupId,
  groupName,
  field,
  category,
  area,
  content,
  startedAt,
  endedAt,
  registeredAt,
  updatedAt,
}) => {

  
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
