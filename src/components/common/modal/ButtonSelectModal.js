/**buttonSelectModal 여러 라운드 버튼 중 선택을 하는 형태인 모달 */
import { useEffect } from 'react';
import useModal from '../usedInModal/useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  changeField,
} from '../../../modules/redux/community/postWrite';
import { SelectButton } from '../../community/PostWrite/SelectButton';
import { SelectAllButton } from '../../community/PostWrite/SelectAllButton';
import { List, Border } from '../../../styles/ModalStyle';
import ModalButtonDiv from '../usedInModal/ModalButtonDiv';
import {
  selectConfig,
  selectAllConfig,
} from '../../../modules/common/AttributeData';

const ButtonSelectModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal);
  const { contentType } = modal;
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', contentType),
  );
  const mainCategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );
  const status = useSelector(postWriteSelector('postWriteSelect', contentType));

  const button = selectConfig({ content: contentType, mainCategory });
  const buttonAll = selectAllConfig(contentType);
  useEffect(() => {
    dispatch(
      changeField({
        form: 'postWriteSelect',
        key: contentType,
        value: Initialization,
      }),
    );
  }, []);

  const setStatus = () => {
    dispatch(
      submitForm({
        key: contentType,
      }),
    );

    const value =
      contentType === 'category'
        ? !(status === buttonAll)
        : !(status[0] === buttonAll);
    dispatch(
      changeField({
        form: 'ButtonActive',
        key: contentType,
        value: value,
      }),
    );

    closeModal();
  };

  const cancel = () => {
    dispatch(initializeForm({ form: 'postWriteSelect', key: contentType }));
    closeModal();
  };

  return (
    <div>
      <div style={List}>
        <SelectAllButton />
        {button.map((button, index) => (
          <div key={index}>
            <SelectButton text={button.text} />
          </div>
        ))}
      </div>
      <div style={Border} />
      {ModalButtonDiv({
        cancel: cancel,
        actText: '확인',
        act: setStatus,
        actColor: false,
      })}
    </div>
  );
};

export default ButtonSelectModal;
