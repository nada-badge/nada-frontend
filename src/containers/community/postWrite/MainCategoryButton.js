/** MainCategoryButton 메인카테고리 버튼 */
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useModal from '../../../components/common/modal/useModal';
import {
  Filter,
  TextWarpper,
  Img,
} from '../../../styles/Community/FilterModalStyle';
import { postWriteSelector } from '../../../modules/Community/postWrite';

export const MainCategoryButton = () => {
  const text = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );

  const isActive = useSelector(
    postWriteSelector('ButtonActive', 'mainCategory'),
  );
  const { openModal } = useModal();

  const onClicks = () => {
    openModal({ type: 'MainCategoryModal' });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClicks}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
