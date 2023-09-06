import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField } from '../modules/headerStatus';

const Community = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: 'pageStatus', value: 'notice-menu' }));
    dispatch(changeField({ key: 'pageNameStatus', value: '커뮤니티' }));
  });

  const gochild = () => {
    navigate('/Community/child');
  };

  return (
    <div>
      Community 입니다.
      <button onClick={gochild}>하위페이지</button>
    </div>
  );
};

export default Community;
