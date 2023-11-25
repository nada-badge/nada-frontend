/** CategoryModal postWrite 중 종류 button 클릭 시 나오는 모달 */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import useModal from '../useModal';
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  setField,
} from '../../../../modules/Community/postWrite';
import { SelectButton } from '../../../community/PostWrite/SelectButton';
import { SelectAllButton } from '../../../community/PostWrite/SelectAllButton';
import ModalButtonDiv from '../../../common/modal/ModalButtonDiv';
import { List, Border } from '../ModalStyle';
import { categoryButtons } from '../../../common/AreaFieldCategoryData';
function CategoryModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', 'category'),
  );
  const mainCategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );

  const status = useSelector(postWriteSelector('postWriteSelect', 'category'));

  const buttonAll = { text: '전체' };

  const [buttons, setButtons] = useState(categoryButtons);

  useEffect(() => {
    dispatch(
      setField({
        form: 'postWriteSelect',
        key: 'category',
        value: Initialization,
      }),
    );
    if (mainCategory === '모집') {
      setButtons(buttons.slice(0, 6));
    }
  }, []);

  const SetStatus = () => {
    dispatch(
      submitForm({
        key: 'category',
      }),
    );

    const value = !(status === buttonAll.text);
    dispatch(
      setField({
        form: 'ButtonActive',
        key: 'category',
        value: value,
      }),
    );

    closeModal();
  };

  const Cancels = () => {
    dispatch(initializeForm({ form: 'postWriteSelect', key: 'category' }));
    closeModal();
  };

  return (
    <Modal>
      <div>
        <List>
          <SelectAllButton />
          {buttons.map((button, index) => (
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
          actColor: false,
        })}
      </div>
    </Modal>
  );
}

export default CategoryModal;
