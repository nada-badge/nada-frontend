/* 사용자 상세 정보 조회 API */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { decodeJwtToken } from '../../../Auth/modules/decodeJwtToken';

const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['getUserInfo'],
    queryFn: async () => {
      const { sub: _id } = decodeJwtToken(localStorage.getItem('token'));

      const { data } = await client.get('/user', {
        params: { _id: _id },
      });
      return data.user;
    },
    retry: 0, // 404 error는 서버에 해당 기간의 관심 활동이 없을때, 발생합니다.
  });
};

export default useGetUserInfo;
