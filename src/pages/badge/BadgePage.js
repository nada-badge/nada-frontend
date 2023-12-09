import { applyFontStyles } from '../../styles/fontStyle';
import CardList from '../../components/cardList/CardList';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';
import { pageContainer, myBadge } from '../../styles/Badge';
import SortOrder from '../../components/search/SortOrder';
import { AlignModal } from '../../containers/badge/AlignModal';

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
      <div
        style={Object.assign(
          applyFontStyles({ font: 'title-02', color: '' }),
          myBadge,
        )}
      >
        <div className="text">나의 뱃지</div>
        <div className="count">5</div>
      </div>
      <SortOrder text={`${align} 정렬`} />
      <CardList title={2023} title_font={'subtitle-03'}>
        <BadgeItem cards={badge_info} />
      </CardList>
    </div>
  );
};

export default BadgePage;
