import EventItem from './EventItem';
import { useCallback } from 'react';

const EventListBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: 'calc(100% - 30px)',
  margin: '0 auto',
};

const EventList = ({ children }) => {
  const transForm = useCallback((date) => {
    if (date) {
      const [, month, day] = date.split('-').map(Number);
      return { month, day };
    }
    return null;
  }, []);

  return (
    <div style={EventListBox}>
      {children &&
        children.map((item, idx) => (
          <EventItem
            title={item.title}
            key={idx}
            start={transForm(item.start)}
            end={transForm(item.end)}
            color={item.color}
          />
        ))}
    </div>
  );
};

export default EventList;
