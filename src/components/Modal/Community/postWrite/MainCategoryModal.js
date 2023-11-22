/** MainCategoryModal postWrite 중 카테고리 button 클릭 시 나오는 모달 */
import { useState, useEffect } from 'react';
import Modal from '../Modal';
import useModal from '../useModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  postWriteSelector,
  setField,
} from '../../../../modules/Community/postWrite';
import classNames from 'classnames';
import { ListMain, Border, MainCategory, Img } from '../ModalStyle';
import ModalButtonDiv from '../../../common/modal/ModalButtonDiv';

function MainCategoryModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  //postWriteSubit값으로 nowClick 초기화
  const [nowClick, setNowClick] = useState(
    useSelector(postWriteSelector('postWriteSubmit', 'mainCategory')),
  );

  useEffect(() => {}, []);

  //현재 선택된 값이 바뀔 때마다 select 리덕스 값을 업데이트
  const OnClick = (nowClick) => {
    setNowClick(nowClick);
  };

  const Output = (text, status) => {
    const active = status === nowClick;
    return (
      <MainCategory
        onClick={() => {
          OnClick(status);
        }}
      >
        <div className="text-wrapper">{text}</div>
        <Img className={classNames('vector', { active })} />
      </MainCategory>
    );
  };

  const Cancels = () => {
    closeModal();
  };

  const SetStatus = () => {
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
      <div>
        <ListMain>
          {Output('모집 게시판', '모집')}
          {Output('홍보 게시판', '홍보')}
          {Output('자유 게시판', '자유')}
        </ListMain>
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

export default MainCategoryModal;
