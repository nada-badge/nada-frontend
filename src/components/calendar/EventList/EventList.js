import styled from 'styled-components';
import EventItem from './EventItem';
import { useSelector } from 'react-redux';

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

  return (
    <EventListBox>
      {events &&
        events.map((item, idx) => (
          <EventItem
            title={item.title}
            key={idx}
            start={item.start}
            end={item.end}
            color={item.color}
          />
        ))}
    </EventListBox>
  );
};

export default EventList;
