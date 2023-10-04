import React from 'react';
import Banner from '../components/home/Banner';
import BoardCardList from '../components/home/BoardCardList/BoardCardList';
import ActivityCardList from '../components/home/ActivityCardList/ActivityCardList';
import WeekCalendar from '../containers/calendar/WeekCalendar';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;

  & > div {
    background-color: white;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* 상단 내비게이션 
        <Top
          className="top-instance"
          element="https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/-----1.svg"
          property1="main"
        /> */}
      <Banner />
      <WeekCalendar />
      <BoardCardList />
      <ActivityCardList />
    </HomeContainer>
  );
};

export default Home;
