import classNames from 'classnames';
import { Button, TextWarpper, Img } from '../../styles/Community/SelectButton';

export const AttributeInfoButton = ({ text, onClicks, isActive, isImg }) => {
  console.log('button 실행');
  return (
    <Button className={classNames({ isActive })} onClick={() => onClicks()}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isImg && isActive && <Img />}
    </Button>
  );
};
