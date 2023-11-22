/** PrintCenterText 모달 내부에 가운데정렬 TEXT를 출력하는 컴포넌트 */
import classNames from 'classnames';
import { Menu } from '../../../styles/Community/BarModalStyle';
import useModal from '../../Modal/Community/useModal';

const openModalType = (modalType, openModal) => {
  openModal({ type: modalType });
};

export const PrintCenteredText = ({
  text,
  act = openModalType,
  modalType = '',
}) => {
  const isRed = text === '삭제하기';
  const { openModal } = useModal();
  return (
    <Menu>
      <div
        onClick={() => act(modalType, openModal)}
        className={classNames('text-wrapper', { isRed })}
      >
        {text}
      </div>
    </Menu>
  );
};

export default PrintCenteredText;
