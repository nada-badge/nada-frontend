import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import '../styles/MonthPicker.scss';
import BottomButton from './BottomButton';

registerLocale('ko', ko);

const Monthpicker = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        showFullMonthYearPicker
        withPortal
        locale={'ko'}
      >
        <BottomButton
          grayAct={() => {}}
          grayText={'취소'}
          act={() => {}}
          actText={'확인'}
        />
      </DatePicker>
    </>
  );
};

export default Monthpicker;
