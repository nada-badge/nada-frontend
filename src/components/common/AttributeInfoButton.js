import classNames from 'classnames';
import { Button, TextWarpper, Img } from '../../styles/mommunity/SelectButton';

export const AttributeInfoButton = ({ text, onClick, isActive, isImg }) => {
  return (
    <Button className={classNames({ isActive })} onClick={() => onClick()}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isImg && isActive && <Img />}
    </Button>
  );
};
