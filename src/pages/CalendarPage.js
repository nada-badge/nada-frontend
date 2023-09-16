import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import '../styles/Calendar.scss';

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > div {
    width: 345px;
  }
`;

const CalendarPage = () => {
  return (
    <Div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{ start: null, center: 'title', end: null }}
          contentHeight={579}
          locale={'ko'}
          dayCellContent={function (info) {
            if (info.isToday) {
              return (
                <div>
                  <p>{info.dayNumberText.replace('일', '')}</p>
                </div>
              );
            }
            return info.dayNumberText.replace('일', '');
          }}
          fixedWeekCount={false}
        />
      </div>
    </Div>
  );
};

export default CalendarPage;
