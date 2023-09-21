import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const WeekCalendar = () => {
  return (
    <>
      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView={'dayGridWeek'}
          headerToolbar={{ start: 'title', center: null, end: null }}
          height={'215px'}
          locale={'ko'}
          dayHeaderFormat={{ weekday: 'short' }}
          dayCellContent={(info) => info.date.toDateString().split(' ')[2]}
          // dayGridWeek은 'end + 1'로 표시해야한다. (적용전)
          events={[
            {
              title: 'event1',
              start: '2023-09-18',
              end: '2023-09-23',
            },
            {
              title: 'event2',
              start: '2023-09-20',
              end: '2023-09-22',
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
