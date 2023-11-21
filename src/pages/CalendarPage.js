import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/Calendar.scss';
import EventBox from '../components/calendar/event';
import TodayBox from '../components/calendar/today';
import DetailEvent from '../containers/calendar/DetailEvent';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/calendar';
import useEventsQuery from '../modules/queries/EventQuery';
import { setBarStatus } from '../modules/bar';

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > .CalendarWrapper {
    width: calc(100% - 30px);

    @media screen and (max-width: 345px) {
      width: 100%;
    }

    @media screen and (min-width: 376px) {
      width: 375px;
    }
  }
`;

const today = new Date();

const CalendarPage = () => {
  const email = localStorage.getItem('email');

  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(false);
  };

  const [date, setDate] = useState({
    month_day: '', // 일(day)
    day_index: '', // 요일[0~6]
  });

  const [events, setEvents] = useState([]);

  // useQuery로 이벤트 가져오기
  const { data, isLoading, isError } = useEventsQuery({
    email: email,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const MonthEvent = (data.activities || []).map((e) => ({
      title: e.activityName,
      start: e.startedAt.slice(0, 10),
      end: e.endedAt.slice(0, 10),
    }));

    setEvents(MonthEvent);
  }, [data]);

  const openHandler = (info) => {
    // 모달 열기/닫기
    setIsModal(!isModal);

    // 클릭한 날짜 정보 추출
    const { dateStr, date } = info;

    // date 상태 업데이트
    setDate((prevDateformat) => ({
      ...prevDateformat,
      month_day: dateStr,
      day_index: date.getDay(),
    }));
  };

  useEffect(() => {
    dispatch(changeField({ key: 'date', value: date.month_day }));
    dispatch(
      changeField({ key: 'events', value: filterEvent(date.month_day) }),
    );
    dispatch(
      setBarStatus({
        headerState: 'backBellMenu',
        text: '캘린더',
        isShowBottom: true,
      }),
    );
  }, [date.month_day, events]);

  // 주어진 날짜를 기준으로 이벤트를 필터링
  const filterEvent = useCallback(
    (dateStr) => {
      const baseDay = Number(dateStr.split('-')[2]);

      return events.filter(({ start, end }) => {
        const startDay = Number(start.split('-')[2]);
        const endDay = end ? Number(end.split('-')[2]) : startDay;
        return startDay <= baseDay && baseDay <= endDay;
      });
    },
    [events],
  );

  return (
    <Div>
      {isModal && <DetailEvent date={date} modalHandler={modalHandler} />}

      <div className="CalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
          height={'calc( 100vh - (88px + 85px))'}
          locale={'ko'}
          dayCellContent={(info) => {
            const dayNumber = info.dayNumberText.replace('일', '');
            return info.isToday ? <TodayBox text={dayNumber} /> : dayNumber;
          }}
          fixedWeekCount={false}
          events={events}
          eventContent={(info) => <EventBox text={info.event.title} />}
          dateClick={(info) => openHandler(info)}
        />
      </div>
    </Div>
  );
};

export default CalendarPage;
