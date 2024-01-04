import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../../styles/calendar/Calendar.scss';
import '../../styles/calendar/WeekCalendar.scss';
import TodayBox from '../../components/calendar/today';
import EventBox from '../../components/calendar/event';
import useGetInterested from '../../modules/queries/activity/useGetInterested';

const WeekCalendar = () => {
  // 서버에서 가져온 데이터
  const [dateSet, setDateSet] = useState({ start: '', end: '' });
  const { data: events } = useGetInterested(dateSet);

  return (
    <>
      <div className="WeekCalendarWrapper">
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
          events={events}
          datesSet={(dateInfo) => {
            setDateSet((prevDateSet) => ({
              ...prevDateSet,
              start: dateInfo.start,
              end: dateInfo.end,
            }));
          }}
        />
      </div>
    </>
  );
};

export default React.memo(WeekCalendar);
