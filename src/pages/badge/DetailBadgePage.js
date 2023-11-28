import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/bar';

const DetailBadgePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'bell',
        text: '뱃지',
        isShowBottom: true,
      }),
    );
  });

  const pageContainer = {
    width: ' 375px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '0 auto',
  };

  return (
    <div style={pageContainer}>
      <div>{'뱃지 썸네일'}</div>
      <div>{'뱃지 설명'}</div>
      <div>{'활동 내역'}</div>
      <div>{'활동 사진'}</div>
    </div>
  );
};

export default DetailBadgePage;
