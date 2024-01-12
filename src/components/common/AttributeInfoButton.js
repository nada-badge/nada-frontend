/** AttributeInfoButton region, field, category 데이터를 라운드 버튼 형태로 출력하는 컴포넌트 */
import classNames from 'classnames';
import { TextWarpper } from '../../styles/community/SelectButton';

export const AttributeInfoButton = ({ text, onClick, isActive }) => {
  return (
    <div onClick={() => onClick()}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
    </div>
  );
};
