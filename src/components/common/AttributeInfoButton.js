/** AttributeInfoButton region, field, category 데이터를 라운드 버튼 형태로 출력하는 컴포넌트 */
import classNames from 'classnames';
import { Button, TextWarpper } from '../../styles/community/SelectButton';
import { X } from './icon/X';

export const AttributeInfoButton = ({ text, onClick, isActive, isImg }) => {
  return (
    <Button className={classNames({ isActive })} onClick={() => onClick()}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isImg && isActive && <X color={'white'} />}
    </Button>
  );
};
