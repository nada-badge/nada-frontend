/** CalendarModal 캘린더를 통해 start, end 날짜 정하는 모달 */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import '../styles/DatePicker.scss';
import useModal from '../modules/useModal';
import BottomButton from './usedInModal/BottomButton';
import { changeField, postWriteSelector } from '../../modules/redux/postWrite';
import styled from 'styled-components';
import { AngleBracket } from '../../icon/AngleBracket';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const CalendarModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [startDate, setStartDate] = useState(
    useSelector(postWriteSelector('postWriteSubmit', 'startedAt')),
  );
  const [endDate, setEndDate] = useState(
    useSelector(postWriteSelector('postWriteSubmit', 'endedAt')),
  );
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  console.log('Start : ', startDate, ' : ', endDate, ':', !endDate);
  const setStatus = () => {
    dispatch(
      changeField({
        form: 'postWriteSubmit',
        key: 'startedAt',
        value: startDate,
      }),
    );
    endDate
      ? dispatch(
          changeField({
            form: 'postWriteSubmit',
            key: 'endedAt',
            value: endDate,
          }),
        )
      : dispatch(
          changeField({
            form: 'postWriteSubmit',
            key: 'endedAt',
            value: startDate,
          }),
        );
    closeModal();
  };

  return (
    <Layout>
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          locale={'ko'}
          showPopperArrow={false}
          fixedHeight={false}
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
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </span>
              </div>
              <AngleBracket
                Direction="right"
                onClick={increaseMonth}
                className="monthButton"
                disabled={nextMonthButtonDisabled}
              />
            </div>
          )}
        />
      </div>
      <BottomButton actText={'확인'} act={setStatus} disabled={!endDate} />
    </Layout>
  );
};

export default CalendarModal;

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
`;
