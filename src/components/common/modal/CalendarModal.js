/** CalendarModal 캘린더를 통해 start, end 날짜 정하는 모달 */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ModalButtonDiv from '../usedInModal/ModalButtonDiv';
import styled from 'styled-components';

const CalendarModal = () => {
  const modal = useSelector(({ modal }) => modal);
  const [dateSet, setDateSet] = useState({ start: '', end: '' });

  return (
    <Layout>
      {/* <캘린더 라이브러리를 사용해서 들어가기> */}
      {/* onClick 시 postWrite 리덕스테 값 저장하기*/}
      {/* 확인 시 postWrite submit에 리덕스테 값 저장하기*/}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
        height={'254px'}
        width={'280px'}
        contentHeight={'40px'}
        locale={'ko'}
        //   dayCellContent={(info) => {
        //     const dayNumber = info.dayNumberText.replace('일', '');
        //     return info.isToday ? <TodayBox text={dayNumber} /> : dayNumber;
        //   }}
        fixedWeekCount={false}
        //   events={events}
        //   eventContent={(info) => <EventBox text={info.event.title} />}
        //   dateClick={(info) => openHandler(info)}
        // datesSet={(dateInfo) => {
        //   setDateSet((prevDateSet) => ({
        //     ...prevDateSet,
        //     start: dateInfo.start,
        //     end: dateInfo.end,
        //   }));
        //}}
      />
      <ModalButtonDiv actText={'확인'} />
    </Layout>
  );
};

export default CalendarModal;

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;
