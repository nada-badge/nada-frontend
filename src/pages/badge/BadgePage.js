import { applyFontStyles } from '../../styles/fontStyle';
import CardList from '../../components/cardList/CardList';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { changeBarStatus } from '../../modules/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';
import { pageContainer, myBadge } from '../../styles/Badge';
import { AlignBox } from '../../components/badge/AlignBox';
import { AlignModal } from '../../containers/badge/AlignModal';
import React from 'react';

const BadgePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bell',
        text: '뱃지',
        isShowBottom: true,
      }),
    );
  });

  const [isModal, setModal] = useState(false);

  const [align, setAlign] = useState('연도별');

  const openHandler = useCallback(() => {
    console.log('openHandler');
    setModal(!isModal);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

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
      {isModal && <AlignModal align={align} closeModal={closeModal} />}
      <div
        style={Object.assign(
          applyFontStyles({ font: 'title-02', color: '' }),
          myBadge,
        )}
      >
        <div className="text">나의 뱃지</div>
        <div className="count">5</div>
      </div>
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AlignBox text={`${align} 정렬`} onClick={openHandler} />
      </div>
      <CardList title={2023} title_font={'subtitle-03'}>
        <BadgeItem cards={badge_info} />
      </CardList>
    </div>
  );
};

export default React.memo(BadgePage);
