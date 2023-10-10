import styled from 'styled-components';
import { body_01, subtitle_02, subtitle_03 } from '../../styles/fontStyle';
import { useState } from 'react';
import classnames from 'classnames';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.02);

  & > .header {
    display: flex;

    & > .title {
      display: flex;
      height: 42px;
      padding: 10px 63.5px 8px 63px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin: 0;
      ${subtitle_02('var(--myspec-gray-scalegray-900)')}
    }

    & > .clicked {
      // classname을 활용해 선택한 컴포넌트에만 적용할 예정
      border-bottom: 2px solid var(--blue1, #1363ff);
    }
  }

  & > .content {
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
  }
`;
const InfoContainer = () => {
  const [active, setActive] = useState('detail');

  const onClick = (e) => {
    const { className } = e.target;
    setActive(className);
  };

  return (
    <DetailContainer>
      <div className="header">
        <div
          className={classnames('title detail', {
            clicked: active.includes('detail'),
          })}
          onClick={onClick}
        >
          상세 내용
        </div>
        <div
          className={classnames('title recruit', {
            clicked: active.includes('recruit'),
          })}
          onClick={onClick}
        >
          팀원 모집
        </div>
      </div>
      <div className="content">
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
      </div>
    </DetailContainer>
  );
};

export default InfoContainer;
