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
  const [date, setDate] = useState(null);
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

  const openHandler = (dateStr) => {
    setIsModal(!isModal);
    setDate(dateStr);
    dispatch(changeField({ key: 'date', value: dateStr }));
    dispatch(changeField({ key: 'events', value: filterEvent(dateStr) }));
  };

  const filterEvent = (dateStr) => {
    const clickedDate = Number(dateStr.split('-')[2]);
    return events.filter((el) =>
      el.end
        ? Number(el.start.split('-')[2]) <= clickedDate &&
          Number(el.end.split('-')[2]) >= clickedDate
        : Number(el.start.split('-')[2]) === clickedDate,
    );
  };

  return (
    <Div>
      {isModal ? <DetailEvent date={date} /> : null}

      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
          height={'625px'}
          windowResize={function (arg) {
            console.log(arg);
          }}
          locale={'ko'}
          dayCellContent={function (info) {
            if (info.isToday) {
              return <TodayBox text={info.dayNumberText.replace('일', '')} />;
            }
            return info.dayNumberText.replace('일', '');
          }}
          fixedWeekCount={false}
          events={events}
          eventContent={function (info) {
            return <EventBox text={info.event.title} />;
          }}
          dateClick={(info) => openHandler(info.dateStr)}
        />
      </div>
    </Div>
  );
};

export default CalendarPage;
