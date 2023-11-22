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
