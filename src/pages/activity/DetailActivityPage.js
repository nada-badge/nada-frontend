import InfoContainer from '../../containers/activity/InfoContainer.js';
import Thumbnail from '../../containers/activity/Thumbnail.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useActivityQuery } from '../../modules/queries/ActivityQuery.js';

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
  const params = useParams();
  const { data, isLoading, isError } = useActivityQuery({ _id: params._id });
  const [info, setInfo] = useState();

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

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }

    setInfo(data);
  }, [data]);

  return (
    <DetailContainer>
      {info && <Thumbnail info={info} />}
      <InfoContainer info={info} />
    </DetailContainer>
  );
};

export default DetailActivityPage;
