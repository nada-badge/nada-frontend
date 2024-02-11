import { Explain, TitleBox } from '../../../styles/Survey';
import '../../../styles/PageCommon.scss';
import BadgeDetailsView from '../BadgeDetailsView';
import { useSelector } from 'react-redux';

const PreviewBadge = () => {
  const { name, explain, shape, activities, teams, issueList } = useSelector(
    ({ badge }) => badge,
  );

  const badge_info = {
    img_src: shape.src,
    badgeType: '교내 동아리', // 수정 필요
    title: name,
    team: teams[0],
    role: '팀원', // team[0] 의 소속된 사람들 중에서 가져와야함
  };

  const data = {
    content: explain,
    activity_info: activities,
  };

  return (
    <>
      <div style={{ minWidth: 'calc(375px - 16px)', boxSizing: 'border-box' }}>
        <div>
          <TitleBox>
            발급할 뱃지의 미리보기예요
            <Explain>
              스크롤을 내려 입력하신 정보를 최종적으로 확인해 주세요
              <br />
              뱃지를 발급한 이후에는 임의 수정이 불가능해요
            </Explain>
          </TitleBox>
        </div>
        <BadgeDetailsView
          badge_info={badge_info}
          data={data}
          isPreview={true}
        />
      </div>
    </>
  );
};

export default PreviewBadge;
