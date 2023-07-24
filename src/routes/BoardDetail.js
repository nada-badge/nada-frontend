/* BoardDetail.js */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../componentss/Board';

const BoardDetail = () => {
  const { _id } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = async () => {
    console.log(_id);
    const resp = await axios.get('http://34.64.104.214:3000/schedule/list?groupName=NADA');
    setBoard(resp.data.schedules.find((x) => x._id === _id));
    setLoading(false);
    console.log('getBoard가 실행되었습니다.');
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
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
      )}
    </div>
  );
};

export default BoardDetail;
