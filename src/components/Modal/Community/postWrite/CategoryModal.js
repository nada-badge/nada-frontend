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

  const [buttons, setButtons] = useState([
    { id: 1, text: '공모전' },
    { id: 2, text: '연합동아리' },
    { id: 3, text: '교내동아리' },
    { id: 4, text: '지역동아리' },
    { id: 5, text: '소모임' },
    { id: 6, text: '프로젝트' },
    { id: 7, text: '대외활동' },
    { id: 8, text: '인턴' },
    { id: 9, text: '아르바이트' },
  ]);

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
