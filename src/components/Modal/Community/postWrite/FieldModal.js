/** FieldModal postWrite 중 분야 button 클릭 시 나오는 모달 */
import { useEffect } from 'react';
import Modal from '../Modal';
import useModal from '../useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  setField,
} from '../../../../modules/Community/postWrite';
import { SelectButton } from '../../../community/PostWrite/SelectButton';
import { List, Border } from '../ModalStyle';
import { SelectAllButton } from '../../../community/PostWrite/SelectAllButton';
import ModalButtonDiv from '../../../common/modal/ModalButtonDiv';
import { fieldButtons } from '../../../common/AreaFieldCategoryData';

function FieldModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', 'field'),
  );
  const status = useSelector(postWriteSelector('postWriteSelect', 'field'));

  const buttonAll = { text: '전체' };

  useEffect(() => {
    dispatch(
      setField({
        form: 'postWriteSelect',
        key: 'field',
        value: Initialization,
      }),
    );
  }, []);

  const SetStatus = () => {
    dispatch(
      submitForm({
        key: 'field',
      }),
    );

    const value = !(status[0] === buttonAll.text);
    dispatch(
      setField({
        form: 'ButtonActive',
        key: 'field',
        value: value,
      }),
    );

    closeModal();
  };

  const Cancels = () => {
    dispatch(initializeForm({ form: 'postWriteSelect', key: 'field' }));
    closeModal();
  };

  return (
    <Modal>
      <div>
        <List>
          <SelectAllButton text={buttonAll.text} />
          {fieldButtons.map((button, index) => (
            <div key={index}>
              <SelectButton text={button.text} />
            </div>
          ))}
        </List>
        <Border />
        {ModalButtonDiv({
          cancel: Cancels,
          actText: '확인',
          act: SetStatus,
          isRed: false,
        })}
      </div>
    </Modal>
  );
}

export default FieldModal;
