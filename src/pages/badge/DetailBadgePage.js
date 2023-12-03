import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';
import { ContentBox } from '../../components/badge/ContentBox';
import { ActivityTable } from '../../components/badge/ActivityTable';
import CardList from '../../components/cardList/CardList';
import {
  viewContainer,
  contentsContainer,
  badgeWrapper,
  layout_style,
  imgItem,
} from '../../styles/Badge';

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

  const badge_info = {
    id: 1,
    year: 2023,
    img_src: '',
    badgeType: '교내 동아리',
    title: 'TEAM NADA 2기',
    team: '디자인팀',
    role: '팀원',
  };

  const activity_info = [
    { start: '2023.01', end: '2023.02', name: '활동 계획 수립' },
    { start: '2023.03', end: '2023.04', name: '에창패 공모전' },
    { start: '2023.04', end: '2023.06', name: '성북구 청년소셜 벤처' },
  ];

  return (
    <div style={viewContainer}>
      <div style={contentsContainer}>
        <div style={badgeWrapper}>
          <BadgeItem cards={[badge_info]} $layout_style={layout_style} />
        </div>
        <ContentBox title={'뱃지 설명'}>
          블록체인 뱃지를 기반으로 취업에 관한 전방위적 기능을 제공하고자 하는
          IT 창업 동아리 TEAM NADA입니다.
        </ContentBox>
        <ContentBox title={'활동 내역'}>
          <ActivityTable info={activity_info} />
        </ContentBox>
        <ContentBox title={'활동 사진'}>
          <CardList>
            {Array.from({ length: 4 }, () => 1).map((item, idx) => (
              <div style={imgItem} key={idx} />
            ))}
          </CardList>
        </ContentBox>
      </div>
    </div>
  );
};

export default DetailBadgePage;
