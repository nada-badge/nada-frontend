/*Header 상단 바를 관리하고 출력함 */
import { barStatusSelector } from '../modules/barStatus';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Overlap, Img, Textwrapper, Top } from '../styles/Header';

const Header = () => {
  const pageStatus = useSelector(
    barStatusSelector('headerStatus', 'headerState'),
  );

  const pageNameStatus = useSelector(barStatusSelector('headerStatus', 'text'));
  const navigate = useNavigate();
  const [activeHeaders, setActiveHeaders] = useState();

  //상단 상태값에서 상단 요소의 존재여부 값
  const HeaderType = [
    {
      id: 'backBell',
      logo: false,
      back: true,
      text: true,
      bell: true,
      menu: false,
      post: false,
    },
    {
      id: 'bellMenu',
      logo: false,
      back: false,
      text: true,
      bell: false, //원래는 true지만 menu에 딸려 bell을 출력할 것이기 때문에 false로 지정
      menu: true,
      post: false,
    },
    {
      id: 'logo',
      logo: true,
      back: false,
      text: false,
      bell: true,
      menu: false,
      post: false,
    },
    {
      id: 'back',
      logo: false,
      back: true,
      text: true,
      bell: false,
      menu: false,
      post: false,
    },
    {
      id: 'bell',
      logo: false,
      back: false,
      text: true,
      bell: true,
      menu: false,
      post: false,
    },
    {
      id: 'backPost',
      logo: false,
      back: true,
      text: true,
      bell: false,
      menu: false,
      post: true,
    },
  ];

  //현재 상단값의 요소 존재여부값
  const [CurrentStatus, setCurrentStatus] = useState([
    { id: 'Logo', state: false },
    { id: 'Back', state: false },
    { id: 'Texts', state: false },
    { id: 'Bell', state: false },
    { id: 'Menu', state: false },
    { id: 'Post', state: false },
  ]);

  //각 요소에 대한 구현
  const headerTypeConfig = {
    Texts: <Textwrapper>{pageNameStatus}</Textwrapper>,
    Back: (
      <Overlap>
        <Img onClick={() => navigate(-1)} className="Back" />
      </Overlap>
    ),
    Menu: (
      <Overlap>
        <Img className="BellWMenu" />
        <Img className="Menu" />
      </Overlap>
    ),
    Bell: (
      <Overlap>
        <Img className="Bell" />
      </Overlap>
    ),
    Logo: (
      <Overlap>
        <Img className="Logo" />
      </Overlap>
    ),
    Post: (
      <Overlap>
        <div className="Post">완료</div>
      </Overlap>
    ),
  };

  //현재 상태값에 요소 존재여부값 부여하기
  useEffect(() => {
    let copiedStatus = [...CurrentStatus];

    HeaderType.forEach(
      (team) =>
        pageStatus === team.id &&
        ((copiedStatus[0].state = team.logo),
        (copiedStatus[1].state = team.back),
        (copiedStatus[2].state = team.text),
        (copiedStatus[3].state = team.bell),
        (copiedStatus[4].state = team.menu),
        (copiedStatus[5].state = team.post)),
    );
    setCurrentStatus(copiedStatus);

    setActiveHeaders(
      CurrentStatus.filter((item) => item.state).map((item) => (
        <React.Fragment key={item.id}>
          {headerTypeConfig[item.id]}
        </React.Fragment>
      )),
    );
  }, [pageStatus, pageNameStatus]);

  return <Top>{activeHeaders}</Top>;
};

export default Header;
