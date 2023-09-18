import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import '../styles/Calendar.scss';
import EventBox from '../components/calendar/event';
import TodayBox from '../components/calendar/today';
import { useState } from 'react';

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > .CalendarWrpper {
    width: 345px;
  }
`;

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'All Day Event',
      start: '2023-09-01',
    },
    {
      title: 'Long Event',
      start: '2023-09-07',
      end: '2023-09-20',
      color: '#ffc0cf', // override!
    },
  ]);

  return (
    <Div>
      <div className="CalendarWrpper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: null, center: 'title', end: null }}
          contentHeight={579}
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
        />
      </div>
    </Div>
  );
};

export default CalendarPage;
