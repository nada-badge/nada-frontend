/**buttonSelectModal */
import { useEffect } from 'react';
import Modal from './Modal';
import useModal from './useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  setField,
} from '../../../modules/tommunity/postWrite';
import { SelectButton } from '../../community/PostWrite/SelectButton';
import { SelectAllButton } from '../../community/PostWrite/SelectAllButton';
import { List, Border } from '../../../styles/ModalStyle';
import ModalButtonDiv from './ModalButtonDiv';
import { selectConfig, selectAllConfig } from '../AreaFieldCategoryData';

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
      setField({
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
      setField({
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
    <Modal>
      <div>
        <List>
          <SelectAllButton />
          {button.map((button, index) => (
            <div key={index}>
              <SelectButton text={button.text} />
            </div>
          ))}
        </List>
        <Border />
        {ModalButtonDiv({
          cancel: cancel,
          actText: '확인',
          act: setStatus,
          actColor: false,
        })}
      </div>
    </Modal>
  );
};

export default ButtonSelectModal;
