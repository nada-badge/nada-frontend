/** openModalButton, 게시물 등록 페이지에 모달을 여는 버튼 */
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useModal from '../../common/usedInModal/useModal';
import {
  Filter,
  TextWarpper,
  Img,
} from '../../../styles/community/FilterModalStyle';
import { postWriteSelector } from '../../../modules/community/postWrite';
import { toKorea } from '../../../modules/common/AttributeData';

export const OpenModalButton = ({ content }) => {
  const isActive = useSelector(postWriteSelector('ButtonActive', content));
  const { openModal } = useModal();
  const text = toKorea(content);

  const onClick = () => {
    openModal({ type: 'ButtonSelectModal', contentType: content });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClick}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
