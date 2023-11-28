import InfoContainer from '../../containers/activity/InfoContainer.js';
import Thumbnail from '../../containers/activity/Thumbnail.js';
import styled from 'styled-components';
import { useEffect } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';

const DetailContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  padding-bottom: 88px;

  & > div {
    background-color: white;
  }
`;

const DetailActivityPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'back',
        text: '활동 정보',
        isShowBottom: true,
      }),
    );
  }, []);
  return (
    <DetailContainer>
      <Thumbnail />
      <InfoContainer />
    </DetailContainer>
  );
};

export default DetailActivityPage;
