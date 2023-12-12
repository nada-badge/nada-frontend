import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const CardsContainer = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #00000005;
  position: relative;
  padding: 12px 15px; // 커스텀

  & > .card-container {
    box-sizing: border-box;
    width: 100%;
    overflow-x: scroll;
  }
`;

const Title = styled.div`
  position: relative;
  margin: 0;
  text-align: left;
  padding-bottom: 12px;
`;

const CardListWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  gap: 12px;
  align-items: flex-start;
  display: flex;
`;

const CardList = ({ title, children, title_font }) => {
  const titleFont = applyFontStyles({
    font: title_font || 'subtitle-02',
    color: '',
  });

  return (
    <CardsContainer>
      {title && <Title style={titleFont}>{title}</Title>}
      <div className="card-container">
        <CardListWrapper>{children}</CardListWrapper>
      </div>
    </CardsContainer>
  );
};

export default CardList;
