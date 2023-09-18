import EventItem from './EventItem';
import { useSelector } from 'react-redux';

const EventList = () => {
  const events = useSelector((state) => {
    return state.calendar.day.events;
  });

  return (
    <div>
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
    </div>
  );
};

export default EventList;
