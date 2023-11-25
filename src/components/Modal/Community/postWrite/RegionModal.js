/** RegionModal postWrite 중 지역 button 클릭 시 나오는 모달 */
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
import { SelectAllButton } from '../../../community/PostWrite/SelectAllButton';
import { List, Border } from '../ModalStyle';
import ModalButtonDiv from '../../../common/modal/ModalButtonDiv';
import { regionButtons } from '../../../common/AreaFieldCategoryData';

function RegionModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', 'region'),
  );
  const status = useSelector(postWriteSelector('postWriteSelect', 'region'));
  const buttonAll = { text: '전국' };

  useEffect(() => {
    dispatch(
      setField({
        form: 'postWriteSelect',
        key: 'region',
        value: Initialization,
      }),
    );
  }, []);

  const SetStatus = () => {
    dispatch(
      submitForm({
        key: 'region',
      }),
    );

    const value = !(status[0] === buttonAll.text);
    dispatch(
      setField({
        form: 'ButtonActive',
        key: 'region',
        value: value,
      }),
    );

    closeModal();
  };

  const Cancels = () => {
    dispatch(initializeForm({ form: 'postWriteSelect', key: 'region' }));
    closeModal();
  };

  return (
    <Modal>
      <div>
        <List>
          <SelectAllButton />
          {regionButtons.map((button, index) => (
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

export default RegionModal;
