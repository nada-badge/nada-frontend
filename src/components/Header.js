import { Top } from '../styles/HeaderStyle';
import { headerStatusSelector } from '../modules/headerStatus';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Overlap, Img, Textwrapper } from '../styles/HeaderStyle';

const Header = () => {
  const { pageStatus, pageNameStatus } = useSelector(headerStatusSelector);
  const navigate = useNavigate();

  const [HeaderType] = useState([
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
  ]);

  const [CurrentStatus] = useState([
    { id: 'Logo', state: false },
    { id: 'Back', state: false },
    { id: 'Texts', state: false },
    { id: 'Bell', state: false },
    { id: 'Menu', state: false },
  ]);

  HeaderType.map(
    (team) =>
      pageStatus === team.id &&
      ((CurrentStatus[0].state = team.logo),
      (CurrentStatus[1].state = team.back),
      (CurrentStatus[2].state = team.text),
      (CurrentStatus[3].state = team.bell),
      (CurrentStatus[4].state = team.menu)),
  );

  return (
    <Top>
      {CurrentStatus.map((current) => {
        const { id, state } = current;
        return state ? (
          id === 'Texts' ? (
            <Textwrapper>{pageNameStatus}</Textwrapper>
          ) : (
            <Overlap>
              {id === 'Menu' && <Img className="BellWMenu" />}
              <Img
                onClick={id === 'Back' ? () => navigate(-1) : undefined}
                className={id}
              />
            </Overlap>
          )
        ) : (
          <div></div>
        );
      })}
    </Top>
  );
};

export default Header;
