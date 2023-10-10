import styled from 'styled-components';
import { subtitle_03, body_01 } from '../../styles/fontStyle';

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 255px;
  position: relative;
  top: 16px;
  left: 15px;

  & > div > :nth-child(1) {
    ${subtitle_03('#1A1A1A')}
  }

  & > div > :nth-child(2) {
    ${body_01('#1A1A1A')}
  }
`;

const ContentContainer = ({ active }) => {
  return (
    <>
      {active.includes('detail') && (
        <DetailContent>
          <div className="duration">
            <div>접수기간</div>
            <div>5월 2일(화) ~ 5월 19일(금)</div>
          </div>
          <div className="team">
            <div>기관</div>
            <div>사단법인 파이나다운청년들</div>
          </div>
          <div className="place">
            <div>장소</div>
            <div>
              [사단법인 파이나다운청년들] 경기도 성남시 분당구 새마을로 12 4층
            </div>
          </div>
        </DetailContent>
      )}
    </>
  );
};

export default ContentContainer;
