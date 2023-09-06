import { Navi, NavLinks, Img, Text } from './styles/BottomNavStyle';
import classNames from 'classnames';

export const BottomNav = () => {
  const BottomNavType = [
    { id: 1, text: '홈', path: '/home', content: 'Home' },
    { id: 2, text: '활동', path: '/activity', content: 'Activity' },
    { id: 3, text: '뱃지', path: '/badge', content: 'Badge' },
    { id: 4, text: '커뮤니티', path: '/community', content: 'Community' },
    { id: 5, text: 'MY', path: '/mypage', content: 'Mypage' },
  ];

  return (
    <Navi>
      {BottomNavType.map((link) => {
        const { id, text, path, content } = link;
        return (
          <NavLinks to={path} className={content} key={id}>
            {({ isActive }) => (
              <>
                <Img className={classNames(content, { isActive })} />
                <Text className={classNames(content, { isActive })}>
                  {text}
                </Text>
              </>
            )}
          </NavLinks>
        );
      })}
    </Navi>
  );
};

export default BottomNav;
