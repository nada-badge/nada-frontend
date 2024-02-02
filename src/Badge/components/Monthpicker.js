import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import '../styles/MonthPicker.scss';
import { ButtonContainer } from '../containers/register/ActivityForm';
import { Cancel, Act } from '../../Modal/components/usedInModal/BottomButton';

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
        <div>
          <ButtonContainer
            style={{ bottom: '0px', margin: '0 auto', paddingTop: '16px' }}
          >
            <Cancel onClick={() => {}}>
              <div className="text">취소</div>
            </Cancel>
            <Act onClick={() => {}}>
              <div className="text" style={{ color: 'white' }}>
                확인
              </div>
            </Act>
          </ButtonContainer>
        </div>
      </DatePicker>
    </>
  );
};

export default Monthpicker;
