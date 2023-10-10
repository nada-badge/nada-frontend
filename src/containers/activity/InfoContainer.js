import styled from 'styled-components';
import { subtitle_02 } from '../../styles/fontStyle';
import { useState } from 'react';
import classnames from 'classnames';
import ContentContainer from './ContentContainer';

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
      <ContentContainer active={active} />
    </DetailContainer>
  );
};

export default InfoContainer;
