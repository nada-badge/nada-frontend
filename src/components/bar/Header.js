/*Header 상단 바를 관리하고 출력함 */
import { barSelector } from '../../modules/bar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Top } from '../../styles/Header';
import { HeaderType } from '../../containers/HeaderType';
import { HeaderTypeConfig } from '../../containers/HeaderType';

const Header = () => {
  const pageStatus = useSelector(barSelector('headerStatus', 'headerState'));
  const pageNameStatus = useSelector(barSelector('headerStatus', 'text'));
  const navigate = useNavigate();
  const [activeHeaders, setActiveHeaders] = useState();

  //현재 상단값의 요소 존재여부값
  const [CurrentStatus, setCurrentStatus] = useState([
    { id: 'Logo', state: false },
    { id: 'Back', state: false },
    { id: 'Texts', state: false },
    { id: 'Bell', state: false },
    { id: 'Menu', state: false },
    { id: 'Post', state: false },
  ]);

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
          {HeaderTypeConfig(navigate, { status: item.id }, pageNameStatus)}
        </React.Fragment>
      )),
    );
  }, [pageStatus]);

  return <Top>{activeHeaders}</Top>;
};

export default Header;
