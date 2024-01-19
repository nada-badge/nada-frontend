/*BottomNav 하단 네비게이션 바를 관리하고 출력함*/
import React from 'react';
import { Navi, NavLinks, Text } from '../styles/BottomNav';
import { barSelector } from '../modules/redux/bar';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { BottomBarIconsSvg } from '../../icon/BottomBarIconsSvg';

export const BottomNav = () => {
  const active = useSelector(barSelector('bottomStatus', 'isShowBottom'));

  //하단바의 옵션 정의
  const BottomNavType = [
    { id: 1, text: '홈', path: '/', content: 'Home' },
    { id: 2, text: '활동', path: '/activity', content: 'Activity' },
    { id: 3, text: '뱃지', path: '/badge', content: 'Badge' },
    { id: 4, text: '커뮤니티', path: '/community', content: 'Community' },
    { id: 5, text: 'MY', path: '/mypage', content: 'Mypage' },
  ];

  return (
    <div>
      {active && (
        <Navi>
          {BottomNavType.map((link) => {
            const { id, text, path, content } = link;
            return (
              <NavLinks to={path} className={content} key={id}>
                {({ isActive }) => (
                  <>
                    <BottomBarIconsSvg content={content} isActive={isActive} />
                    <Text className={classNames(content, { isActive })}>
                      {text}
                    </Text>
                  </>
                )}
              </NavLinks>
            );
          })}
        </Navi>
      )}
    </div>
  );
};

export default React.memo(BottomNav);
