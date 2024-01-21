import { InputBox, TitleBox } from '../../../styles/Survey';
import { FixedLoginBtn } from './ShapeForm';
const ActivityForm = ({ onSubmit, order, dispatchField }) => {
  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <InputBox>{/* 액티비티 입력 박스 */}</InputBox>
      </form>
      <FixedLoginBtn form={order} disabled={false}>
        <div>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default ActivityForm;
