/** MonthModal을 통해 [년, 월] 을 정하는 모달 */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import '../../Badge/styles/MonthPicker.scss';
import useModal from '../modules/useModal';
import BottomButton from './usedInModal/BottomButton';
import { changeField } from '../../modules/redux/postWrite';
import styled from 'styled-components';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const MonthModal = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const setStatus = () => {
    // dispatch(
    //   changeField({
    //     form: 'postWriteSubmit',
    //     key: 'startedAt',
    //     value: startDate,
    //   }),
    // );
    // endDate
    //   ? dispatch(
    //       changeField({
    //         form: 'postWriteSubmit',
    //         key: 'endedAt',
    //         value: endDate,
    //       }),
    //     )
    closeModal();
  };

  return (
    <Layout className="Layout">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        showFullMonthYearPicker
        inline
        locale={'ko'}
      >
        {/** ▼act 추가 */}
        <BottomButton actText={'확인'} act={setStatus} />
      </DatePicker>
    </Layout>
  );
};

export default MonthModal;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
