import { useMutation } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { decodeJwtToken } from '../../../Auth/modules/decodeJwtToken';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useMutateBadge = () => {
  const { email } = decodeJwtToken(localStorage.getItem('token'));
  const badge = useSelector(({ badge }) => badge);

  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      const { name, explain, activities, shape, issueList } = badge;

      return client.post('/badge', {
        issuer: email,
        badgeName: name,
        description: explain,
        records: activities,
        badgeImageUrl: shape.src,
        members: issueList.flat(),
      });
    },
    onSuccess: (data) => {
      console.log('회원가입 완료', data);
      navigate('/badge');
    },
    onError: (error, data) => {
      console.log('오류발생!', error, data);
    },
  });
};

export default useMutateBadge;
