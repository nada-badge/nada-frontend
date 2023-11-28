import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';

const DetailBadgePage = () => {
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
    width: ' 375px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '0 auto',
    background: 'var(--myspec-gray-sclegray-border)',
  };

  const BadgeWrapper = {
    background: 'white',
    padding: '24px 112px',
  };

  const badge_info = {
    id: 1,
    year: 2023,
    img_src: '',
    badgeType: '교내 동아리',
    title: 'TEAM NADA 2기',
    team: '디자인팀',
    role: '팀원',
  };

  const layout_style = {
    width: '150px',
    height: 'fit-content', // 이미지 + 마지막 text 위치 + text height
    gap: '14px',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '0.3em',
  };

  return (
    <div style={pageContainer}>
      <div style={BadgeWrapper}>
        <BadgeItem card={badge_info} $layout_style={layout_style} />
      </div>
      <div>{'뱃지 설명'}</div>
      <div>{'활동 내역'}</div>
      <div>{'활동 사진'}</div>
    </div>
  );
};

export default DetailBadgePage;
