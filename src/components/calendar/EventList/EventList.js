import styled from 'styled-components';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const EventListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 30px);
  margin: 0 auto;
`;

const EventList = () => {
  const events = useSelector((state) => {
    return state.calendar.day.events;
  });

  const transForm = useCallback((date) => {
    if (date) {
      const [, month, day] = date.split('-').map(Number);
      return { month, day };
    }
    return null;
  }, []);

  return (
    <EventListBox>
      {events &&
        events.map((item, idx) => (
          <EventItem
            title={item.title}
            key={idx}
            start={transForm(item.start)}
            end={transForm(item.end)}
            color={item.color}
          />
        ))}
    </EventListBox>
  );
};

export default EventList;
