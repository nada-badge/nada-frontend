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

function FieldModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector('postWriteSubmit', 'field'),
  );
  const status = useSelector(postWriteSelector('postWriteSelect', 'field'));

  const buttonAll = { text: '전체' };

  const buttons = [
    { id: 1, text: '인문/사회' },
    { id: 2, text: '광고/마케팅' },
    { id: 3, text: '디자인/미술' },
    { id: 4, text: '경영/경제/무역' },
    { id: 5, text: '자기계발' },
    { id: 6, text: 'IT/전자' },
    { id: 7, text: '자연과학' },
    { id: 8, text: '사진/영상' },
    { id: 9, text: '보건/의료' },
    { id: 10, text: '건축/토목' },
    { id: 11, text: '교육' },
    { id: 12, text: '봉사/사회공헌' },
    { id: 13, text: '페스티벌/행사' },
    { id: 14, text: '식품/요리' },
    { id: 15, text: '체육' },
    { id: 16, text: '도시/환경' },
    { id: 17, text: '문화/예술' },
    { id: 18, text: '역사/탐방' },
  ];

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
          {buttons.map((button, index) => (
            <div key={index}>
              <SelectButton text={button.text} />
            </div>
          ))}
        </List>
        <Border />
        {ModalButtonDiv({
          cancelText: '취소',
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
