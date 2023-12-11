import { useEffect, useState, useRef } from 'react';
import EventList from '../../components/calendar/EventList/EventList';
import { ModalBackGround } from '../../styles/calendar/index';

const DayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const DetailEvent = ({ modal, modalHandler }) => {
  const { month_day, day_index, events } = modal;
  const [title, setTitle] = useState(null);
  const outside = useRef();

  useEffect(() => {
    const dateSet = month_day.split('-');
    setTitle(`${dateSet[1]}월 ${dateSet[2]}일 ${DayOfWeek[day_index]}요일`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = (e) => {
    if (e.target === outside.current) {
      modalHandler();
    }
  };

  return (
    <>
      <ModalBackGround ref={outside} onClick={onClick}>
        <div className="EventsContainer">
          <h2>{title}</h2>
          <EventList>{events}</EventList>
        </div>
      </ModalBackGround>
    </>
  );
};

export default DetailEvent;
