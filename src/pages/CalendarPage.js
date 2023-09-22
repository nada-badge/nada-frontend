import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/Calendar.scss';
import EventBox from '../components/calendar/event';
import TodayBox from '../components/calendar/today';
import DetailEvent from '../containers/calendar/DetailEvent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/calendar';

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > .CalendarWrapper {
    width: calc(100% - 30px);

    @media screen and (max-width: 345px) {
      width: 100%;
    }

    @media screen and (min-width: 376px) {
      width: 375px;
    }
  }
`;

const CalendarPage = () => {
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);
  const [date, setDate] = useState({
    month_day: '',
    day_index: '',
  });
  const [events, setEvents] = useState([
    {
      title: 'All Day Event',
      start: '2023-09-01',
    },
    {
      title: '9일 event',
      start: '2023-09-09',
    },
    {
      title: 'Long Event',
      start: '2023-09-07',
      end: '2023-09-20',
      color: '#ffc0cf', // override!
    },
  ]);

  const openHandler = (info) => {
    // 모달 열기/닫기
    setIsModal(!isModal);

    // 날짜 정보 추출
    const { dateStr, date } = info;

    // date 상태 업데이트
    setDate((prevDateformat) => ({
      ...prevDateformat,
      month_day: dateStr,
      day_index: date.getDay(),
    }));

    dispatch(changeField({ key: 'date', value: dateStr }));
    dispatch(changeField({ key: 'events', value: filterEvent(dateStr) }));
  };

  // 주어진 날짜를 기준으로 이벤트를 필터링
  const filterEvent = (dateStr) => {
    const baseDay = Number(dateStr.split('-')[2]);

    return events.filter(({ start, end }) => {
      const startDay = Number(start.split('-')[2]);
      const endDay = end ? Number(end.split('-')[2]) : startDay;
      return startDay <= baseDay && baseDay <= endDay;
    });
  };

  return (
    <Div>
      {isModal && <DetailEvent date={date} /> }

      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
          height={'625px'}
          locale={'ko'}
          dayCellContent={(info) => {
            const dayNumber = info.dayNumberText.replace('일', '');
            return info.isToday ? <TodayBox text={dayNumber} /> : dayNumber;
          }}
          fixedWeekCount={false}
          events={events}
          eventContent={(info) => <EventBox text={info.event.title} />}
          dateClick={(info) => openHandler(info)}
        />
      </div>
    </Div>
  );
};

export default CalendarPage;
