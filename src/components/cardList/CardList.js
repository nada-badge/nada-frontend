import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;

  & > .card-container {
    width: calc(
      375px - 15px
    );
    overflow-x: scroll; 
  }
`;

const Title = styled.div`
  left: 16px;
  position: relative;
  padding: 16px 0px; // 커스텀
  margin: 0;
  text-align: left;
`;

const CardListWrapper = styled.div`
  width: fit-content;
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  position: relative;
  padding-bottom: 12px; // 커스텀
`;

const CardList = ({ title, children, title_font }) => {
  return (
    <CardsContainer>
      {title && (
        <Title
          style={applyFontStyles({
            font: title_font || 'subtitle-02',
            color: '',
          })}
        >
          {title}
        </Title>
      )}
      <div className="card-container">
        <CardListWrapper>{children}</CardListWrapper>
      </div>
    </CardsContainer>
  );
};

export default CardList;
