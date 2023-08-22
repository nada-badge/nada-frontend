import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  border-radius: 10px;
  height: 148px;
  overflow: hidden;
  position: relative;
  width: 120px;

  & > .image-2 {
    background-image: url(https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/image-2@2x.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 88px;
    position: relative;
    width: 120px;
  }

  & > .category {
    color: var(--myspec-primaryblue-1);
    font-family: var(--caption-01-font-family);
    font-size: var(--caption-01-font-size);
    font-style: var(--caption-01-font-style);
    font-weight: var(--caption-01-font-weight);
    left: 12px;
    letter-spacing: var(--caption-01-letter-spacing);
    line-height: var(--caption-01-line-height);
    position: relative;
    /* top: 95px; */
    margin-top: 8px;
    white-space: nowrap;
  }

  & > .title {
    color: #000000;
    font-family: var(--caption-02-font-family);
    font-size: var(--caption-02-font-size);
    font-style: var(--caption-02-font-style);
    font-weight: var(--caption-02-font-weight);
    height: 18px;
    left: 12px;
    letter-spacing: var(--caption-02-letter-spacing);
    line-height: var(--caption-02-line-height);
    position: relative;
    /* top: 117px; */
    margin-top: 5px;
    width: 96px;
  }
`;

const CardItem = ({ card }) => {
  const { title, category } = card;

  return (
    <CardContainer>
      <div className="image-2" />
      <div className="category">{category}</div>
      <div className="title">{title}</div>
    </CardContainer>
  );
};

export default CardItem;
