import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBarStatus } from '../modules/barStatus';

const Community = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({ header: 'bellMenu', name: '커뮤니티', bottom: true }),
    );
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
