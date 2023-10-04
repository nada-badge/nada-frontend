import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './WeekCalendar.scss';
import '../../styles/Calendar.scss';
import TodayBox from '../../components/calendar/today';
import EventBox from '../../components/calendar/event';

const WeekCalendar = () => {
  return (
    <>
      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView={'dayGridWeek'}
          headerToolbar={{ start: 'title', center: null, end: null }}
          titleFormat={{ year: 'numeric', month: 'short' }}
          height={'215px'}
          locale={'ko'}
          dayHeaderFormat={{ weekday: 'short' }}
          dayCellContent={(info) => {
            let day = info.date.toDateString().split(' ')[2];
            return info.isToday ? <TodayBox text={day} /> : day;
          }}
          eventContent={(info) => <EventBox text={info.event.title} />}
          // dayGridWeek은 'end + 1'로 표시해야한다. (적용전)
          events={[
            {
              title: 'event1',
              start: '2023-09-18',
              end: '2023-09-23',
              color: 'pink',
            },
            {
              title: 'event2',
              start: '2023-09-20',
              end: '2023-09-24',
              allDay: true,
            },
            {
              title: 'event3',
              start: '2023-09-21',
            },
          ]}
        />
      </div>
    </>
  );
};

export default WeekCalendar;
