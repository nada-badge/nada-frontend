/** MainCategoryModal postWrite 중 카테고리 button 클릭 시 나오는 모달 */
import { useState } from 'react';
import Modal from '../../common/modal/Modal';
import useModal from '../../common/modal/useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  postWriteSelector,
  setField,
} from '../../../modules/community/postWrite';
import {
  ListMain,
  Border,
  MainCategory,
  TextWrapper,
  Img,
} from '../../../styles/ModalStyle';
import ModalButtonDiv from '../../common/modal/ModalButtonDiv';

const MainCategoryModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  //postWriteSubit값으로 nowClick 초기화
  const [nowClick, setNowClick] = useState(
    useSelector(postWriteSelector('postWriteSubmit', 'mainCategory')),
  );

  //현재 선택된 값이 바뀔 때마다 select 리덕스 값을 업데이트
  const onClick = (nowClick) => {
    setNowClick(nowClick);
  };

  const output = (text, status) => {
    const active = status === nowClick;
    return (
      <div
        style={MainCategory}
        onClick={() => {
          onClick(status);
        }}
      >
        <div style={TextWrapper}>{text}</div>
        <Img className={active ? 'active vector' : 'vector'} />
      </div>
    );
  };

  const cancels = () => {
    closeModal();
  };

  const setStatus = () => {
    dispatch(
      setField({
        form: 'postWriteSubmit',
        key: 'mainCategory',
        value: nowClick,
      }),
    );

    if (!(nowClick === '카테고리')) {
      dispatch(
        setField({
          form: 'ButtonActive',
          key: 'mainCategory',
          value: true,
        }),
      );
    }

    closeModal();
  };

  return (
    <Modal>
      <div style={ListMain}>
        {output('모집 게시판', '모집')}
        {output('홍보 게시판', '홍보')}
        {output('자유 게시판', '자유')}
      </div>
      <div style={Border} />
      {ModalButtonDiv({
        cancel: cancels,
        actText: '확인',
        act: setStatus,
        isRed: false,
      })}
    </Modal>
  );
};

export default MainCategoryModal;
