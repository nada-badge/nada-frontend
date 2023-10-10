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
    cursor: pointer-events;

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
      border-bottom: 2px solid var(--blue1, #1363ff);
    }
  }
`;

const titleData = [
  { id: 'detail', text: '상세 내용' },
  { id: 'recruit', text: '팀원 모집' },
];

const InfoContainer = () => {
  const [active, setActive] = useState(titleData[0].id);

  const onClick = (id) => {
    setActive(id);
  };

  return (
    <DetailContainer>
      <div className="header">
        {titleData.map((item) => (
          <div
            key={item.id}
            className={classnames(`title ${item.id}`, {
              clicked: active === item.id,
            })}
            onClick={() => onClick(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <ContentContainer active={active} />
    </DetailContainer>
  );
};

export default InfoContainer;
