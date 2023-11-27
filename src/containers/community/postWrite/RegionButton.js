/** RegionButton 지역 버튼 */
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import useModal from '../../../components/common/modal/useModal';
import {
  Filter,
  TextWarpper,
  Img,
} from '../../../styles/Community/FilterModalStyle';
import {
  setField,
  postWriteSelector,
} from '../../../modules/Community/postWrite';
import { toKorea } from '../../../components/common/AreaFieldCategoryData';

export const RegionButton = ({ content }) => {
  const isActive = useSelector(postWriteSelector('ButtonActive', content));
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const text = toKorea(content);
  const onClickButton1 = () => {
    openModal({ type: 'ButtonSelectModal', contentType: content });
    dispatch(
      setField({
        form: 'postWriteSelect',
        key: 'modal',
        value: 0,
      }),
    );
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClickButton1}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
