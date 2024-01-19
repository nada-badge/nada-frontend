/** PrintCenteredText 모달 내부에 가운데정렬 TEXT를 출력하는 컴포넌트 */
import classNames from 'classnames';
import { Menu } from '../../../Community/styles/BarModalStyle';

export const PrintCenteredText = ({ print, act }) => {
  const isRed = print === '삭제하기';

  return (
    <Menu>
      <div
        onClick={() => act()}
        className={classNames('text-wrapper', { isRed })}
      >
        {print}
      </div>
    </Menu>
  );
};

export default PrintCenteredText;
