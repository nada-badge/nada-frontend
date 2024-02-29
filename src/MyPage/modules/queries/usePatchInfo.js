/** 프로필 정보를 update 하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { decodeJwtToken } from '../../../Auth/modules/decodeJwtToken';
import { useNavigate } from 'react-router-dom';

const usePatchInfo = () => {
  const { sub: _id } = decodeJwtToken(localStorage.getItem('token'));

  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ type, value }) =>
      client.patch(`/mypage/profile/${_id}`, {
        params: { [type]: value },
      }),
    onSuccess: (data) => {
      console.log('정보가 수정되었습니다.', data);
      navigate('/myPage/');
    },
    onError: (error) => {
      console.log('정보 수정에 실패하였습니다.', error);
      navigate('/myPage');
    },
  });
};

export default usePatchInfo;
