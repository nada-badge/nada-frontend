import { applyFontStyles } from '../../styles/fontStyle';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeBarStatus } from '../../modules/redux/bar';
import { pageContainer, myBadge } from '../../styles/Badge';
import { AlignBox } from '../../components/badge/AlignBox';
import React from 'react';
import { BadgeList } from '../../containers/badge/BadgeList';

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

  const [align, setAlign] = useState('연도별');
  const [category, setCategory] = useState(['2023']);

  const onClick = () => {
    setAlign((prevAlign) => (prevAlign === '연도별' ? '종류별' : '연도별'));
  };

  useEffect(() => {
    // badgeType 종류들을 추출
    const badgeTypes = [
      ...new Set(
        badge_info.map((item) =>
          align === '종류별' ? item.badgeType : item.year,
        ),
      ),
    ];
    setCategory(badgeTypes);
  }, [align]);

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
        <div className="text">나의 뱃지 {badge_info.length}</div>
      </div>
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AlignBox text={`${align} 정렬`} onClick={onClick} />
      </div>
      {category.map((el) => (
        <BadgeList
          title={el}
          badge_info={badge_info.filter((item) =>
            Object.values(item).includes(el),
          )}
        />
      ))}
    </div>
  );
};

export default React.memo(BadgePage);
