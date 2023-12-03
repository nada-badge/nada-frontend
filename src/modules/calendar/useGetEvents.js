import useEventsQuery from '../queries/EventQuery';
import { useEffect, useMemo, useState } from 'react';

// 파리미터로 start, end를 받을 예정
export const useGetEvents = () => {
  const today = new Date();
  const email = localStorage.getItem('email');

  const [events, setEvents] = useState([]);

  const { data } = useEventsQuery({
    email: email,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });

  const formattedEvents = useMemo(() => {
    if (!data) {
      return [];
    }

    return (data.activities || []).map((e, idx) => ({
      title: e.activityName,
      start: e.startedAt.slice(0, 10),
      end: e.endedAt.slice(0, 10),
      color: `hsl(${(idx * 20) % 350},100%, 75%)`,
    }));
  }, [data]);

  useEffect(() => {
    const MonthEvent = formattedEvents;

    setEvents(MonthEvent);
  }, [data, events]);

  return events;
};