/* ActivityBoard.js 상세보기에 해당하는 데이터를 받아 화면에 출력할 컴포넌트*/
import { useSelector } from 'react-redux';
import { activitySelector } from '../../modules/activity';

const ActivityBoard = () => {
  // 1) useSelector 를 통해 클릭된 활동의 세부 값을 shcedule에서 board로 받아온다.
  const {
    activityName,
    groupName,
    field,
    category,
    region,
    content,
    startedAt,
    endedAt,
    registeredAt,
    updatedAt,
  } = useSelector(activitySelector);

  return (
    <div>
      <h2>{activityName}</h2>
      <h5>{groupName}</h5>
      <h5>{field}</h5>
      <h5>{category}</h5>
      <h5>{region}</h5>
      <h5>{content}</h5>
      <h5>{startedAt}</h5>
      <h5>{endedAt}</h5>
      <h5>{registeredAt}</h5>
      <h5>{updatedAt}</h5>
    </div>
  );
};

export default ActivityBoard;
