/* BoardDetail.js */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../componentss/Board';
const BoardDetail = () => {
  const { _id } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  
  const [board, setBoard] = useState(null);


  return (
    <div>
        <Board
          scheduleName={board.scheduleName}
          groupId={board.groupId}
          groupName={board.groupName}
          field={board.field}
          category={board.category}
          area={board.area}
          content={board.content}
          startedAt={board.startedAt}
          endedAt={board.endedAt}
          registeredAt={board.registeredAt}
          updatedAt={board.updatedAt}
        />
    </div>
  );
};

export default BoardDetail;
