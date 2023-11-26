import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/calendar/Calendar.scss';
import EventBox from '../components/calendar/event';
import TodayBox from '../components/calendar/today';
import DetailEvent from '../containers/calendar/DetailEvent';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/calendar/calendar';
import { setBarStatus } from '../modules/bar';
import { filter } from '../modules/calendar/filterEvent';
import { useGetEvents } from '../modules/calendar/useGetEvents';
import React from 'react';
import { Div } from '../styles/calendar/index';

const CalendarPage = () => {
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(false);
  };

  const [date, setDate] = useState({
    month_day: '', // 일(day)
    day_index: '', // 요일[0~6]
  });

  const [dateSet, setDateSet] = useState([]);

  // ** const events = useGetEvents(dateSet);
  const events = useGetEvents();

  const openHandler = useCallback((info) => {
    // 모달 열기/닫기
    setIsModal(!isModal);

    // 클릭한 날짜 정보 추출
    const { dateStr, date } = info;

    // date 상태 업데이트
    setDate((prevDateformat) => ({
      ...prevDateformat,
      month_day: dateStr,
      day_index: date.getDay(),
    }));
  }, []);

  useEffect(() => {
    dispatch(changeField({ key: 'date', value: date.month_day }));
    dispatch(
      changeField({ key: 'events', value: filterEvent(date.month_day) }),
    );
    dispatch(
      setBarStatus({
        headerState: 'backBellMenu',
        text: '캘린더',
        isShowBottom: true,
      }),
    );
  }, [date.month_day, events]);

  // 주어진 날짜를 기준으로 이벤트를 필터링
  const filterEvent = useCallback(
    (baseDateStr) => {
      return filter(baseDateStr, events);
    },
    [events],
  );

  return (
    <Div>
      {isModal && <DetailEvent date={date} modalHandler={modalHandler} />}

      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
          height={'calc( 100vh - (88px + 85px))'}
          locale={'ko'}
          dayCellContent={(info) => {
            const dayNumber = info.dayNumberText.replace('일', '');
            return info.isToday ? <TodayBox text={dayNumber} /> : dayNumber;
          }}
          fixedWeekCount={false}
          events={events}
          eventContent={(info) => <EventBox text={info.event.title} />}
          dateClick={(info) => openHandler(info)}
          datesSet={(dateInfo) => {
            setDateSet((prevDateSet) => ({
              ...prevDateSet,
              start: dateInfo.start,
              end: dateInfo.end,
            }));
          }}
        />
      </div>
    </Div>
  );
};

export default React.memo(CalendarPage);
