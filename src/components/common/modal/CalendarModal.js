/** CalendarModal 캘린더를 통해 start, end 날짜 정하는 모달 */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import '../../../styles/calendar/DatePicker.scss';
import ko from 'date-fns/locale/ko';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ModalButtonDiv from '../usedInModal/ModalButtonDiv';
import styled from 'styled-components';
import { AngleBracket } from '../../../icon/AngleBracket';
registerLocale('ko', ko);

const CalendarModal = () => {
  const modal = useSelector(({ modal }) => modal);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Layout>
      {/* <캘린더 라이브러리를 사용해서 들어가기> */}
      {/* onClick 시 postWrite 리덕스테 값 저장하기*/}
      {/* 확인 시 postWrite submit에 리덕스테 값 저장하기*/}
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          locale={'ko'}
          showPopperArrow={false}
          fixedHeight
          inline
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="dataPickerHeader">
              <AngleBracket
                Direction="left"
                onClick={decreaseMonth}
                className="monthButton"
                disabled={prevMonthButtonDisabled}
              />

              <div>
                <span className="month">
                  {date.getFullYear()}년 {date.getMonth() + 1}월{' '}
                </span>
              </div>
              <div>
                <AngleBracket
                  Direction="right"
                  onClick={increaseMonth}
                  className="monthButton"
                  disabled={nextMonthButtonDisabled}
                />
              </div>
            </div>
          )}
        />
      </div>
      {/** ▼act 추가 */}
      <ModalButtonDiv actText={'확인'} />
    </Layout>
  );
};

export default CalendarModal;

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;
