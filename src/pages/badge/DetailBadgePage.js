import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../modules/redux/bar';
import { BadgeItem } from '../../components/cardList/BadgeItem';
import { ContentBox } from '../../components/badge/ContentBox';
import { ActivityTable } from '../../components/badge/ActivityTable';
import CardList from '../../components/cardList/CardList';
import {
  viewContainer,
  layout_style,
  imgItem,
  hideBadgeBox,
} from '../../styles/Badge';
import '../../styles/PageCommon.scss';
import useModal from '../../components/common/usedInModal/useModal';

const DetailBadgePage = () => {
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

  const { openModal } = useModal();

  const onClick = () => {
    openModal({
      type: 'hideModal',
      contentType: '뱃지',
      title: '이 뱃지를 숨길까요?',
      actionType: '숨기기',
      content: '숨긴 뱃지는 MY-숨긴 뱃지에서 관리할 수 있어요',
    });
  };

  return (
    <div style={viewContainer}>
      <div className="pageContainer">
        <div style={{ padding: '24px 112px' }}>
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
        <div style={hideBadgeBox} onClick={onClick}>
          이 뱃지 숨기기
        </div>
      </div>
    </div>
  );
};

export default DetailBadgePage;
