import { TitleBox } from '../../../styles/Survey';
import ActivityInputItem from '../../components/ActivityInputItem';
import { FixedLoginBtn } from './ShapeForm';

const ActivityForm = ({ onSubmit, order, dispatchField }) => {
  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <ActivityInputItem />
      </form>
      <FixedLoginBtn form={order} disabled={false}>
        <div>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default ActivityForm;
