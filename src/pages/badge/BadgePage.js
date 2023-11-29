import styled from 'styled-components';
import { title_02 } from '../../styles/fontStyle';
import CardList from '../../components/cardList/CardList';
import { AlignBox } from '../../components/badge/alignBox';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setBarStatus } from '../../modules/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';

const MyBadge = styled.div`
  display: flex;
  padding-bottom: 0px;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid var(--myspec-primary-blue-1, #1363ff);
  ${title_02('var(--myspec-gray-scale-gray-900, #1a1a1a)')}
`;

const BadgePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'bell',
        text: '뱃지',
        isShowBottom: true,
      }),
    );
  });

  const pageContainer = {
    display: ' flex',
    width: ' 375px',
    margin: '0px auto',
    padding: ' 16px 15px',
    flexDirection: ' column',
    alignItems: ' flex-start',
    flexShrink: ' 0',
    background: 'var(--myspec-gray-scale-white, #FFF)',
  };

  const badge_info = [
    {
      id: 1,
      year: 2023,
      img_src: '',
      badgeType: '교내 동아리',
      title: 'TEAM NADA 2기',
      team: '디자인팀',
      role: '팀원',
    },
    {
      id: 2,
      year: 2023,
      img_src: '',
      badgeType: '학회',
      title: '성신여대 융합학부 학회',
      team: '',
      role: '발표',
    },
    {
      id: 3,
      year: 2023,
      img_src: '',
      badgeType: '컨퍼런스',
      title: '연합디자인컨퍼런스',
      team: '',
      role: '운영진',
    },
  ];

  return (
    <div style={pageContainer}>
      <MyBadge>
        <div className="text">나의 뱃지</div>
        <div className="count">5</div>
      </MyBadge>
      <AlignBox />
      <CardList title={2023} title_font={'subtitle-03'}>
        <BadgeItem cards={badge_info} />
      </CardList>
    </div>
  );
};

export default BadgePage;
