import EventItem from './EventItem';
import { useSelector } from 'react-redux';

const EventList = () => {
  const events = useSelector((state) => {
    return state.calendar.day.events;
  });

  return (
    <div>{events && events.map((item, idx) => <EventItem key={idx} />)}</div>
  );
};

export default EventList;
