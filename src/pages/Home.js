import React from 'react';
import '../components/home/style.css';
import Banner from '../components/home/Banner';
import BoardCardList from '../components/home/BoardCardList/BoardCardList';
import ActivityCardList from '../components/home/ActivityCardList/ActivityCardList';
import WeekCalendar from '../containers/calendar/WeekCalendar';

const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
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
      </div>
    </div>
  );
};

export default Home;
