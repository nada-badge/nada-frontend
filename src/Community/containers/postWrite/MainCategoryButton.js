/** MainCategoryButton 메인카테고리 버튼 */
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useModal from '../../../Modal/modules/useModal';
import { Filter, TextWarpper, Img } from '../../styles/FilterModalStyle';
import { postWriteSelector } from '../../modules/redux/postWrite';

export const MainCategoryButton = () => {
  const text = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );

  const isActive = useSelector(
    postWriteSelector('ButtonActive', 'mainCategory'),
  );
  const { openModal } = useModal();

  const onClick = () => {
    openModal({ type: 'MainCategoryModal' });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClick}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
