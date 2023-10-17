import { Top } from '../styles/HeaderStyle';
import { headerStatusSelector } from '../modules/headerStatus';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Overlap, Img, Textwrapper } from '../styles/HeaderStyle';

const Header = () => {
  const { pageStatus, pageNameStatus } = useSelector(headerStatusSelector);
  const navigate = useNavigate();
  const [activeHeaders, setActiveHeaders] = useState();

  const HeaderType = [
    {
      id: 'function-notice',
      logo: false,
      back: true,
      text: true,
      bell: true,
      menu: false,
    },
    {
      id: 'notice-menu',
      logo: false,
      back: false,
      text: true,
      bell: false, //원래는 true지만 menu에 딸려 bell을 출력할 것이기 때문에 false로 지정
      menu: true,
    },
    {
      id: 'main',
      logo: true,
      back: false,
      text: false,
      bell: true,
      menu: false,
    },
    {
      id: 'funtion-only',
      logo: false,
      back: true,
      text: true,
      bell: false,
      menu: false,
    },
    {
      id: 'function-only-notice',
      logo: false,
      back: false,
      text: true,
      bell: true,
      menu: false,
    },
  ];

  const [CurrentStatus, setCurrentStatus] = useState([
    { id: 'Logo', state: false },
    { id: 'Back', state: false },
    { id: 'Texts', state: false },
    { id: 'Bell', state: false },
    { id: 'Menu', state: false },
  ]);

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
  };

  useEffect(() => {
    let copiedStatus = [...CurrentStatus];

    HeaderType.forEach(
      (team) =>
        pageStatus === team.id &&
        ((copiedStatus[0].state = team.logo),
        (copiedStatus[1].state = team.back),
        (copiedStatus[2].state = team.text),
        (copiedStatus[3].state = team.bell),
        (copiedStatus[4].state = team.menu)),
    );
    setCurrentStatus(copiedStatus);

    setActiveHeaders(
      CurrentStatus.filter((item) => item.state).map(
        (item) => headerTypeConfig[item.id],
      ),
    );
  }, [pageStatus]);

  return <Top>{activeHeaders}</Top>;
};

export default Header;
