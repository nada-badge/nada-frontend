/* useGetNotice community Comment 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetNotice = ({ _id }) => {
  return useQuery(
    ['getNotice'],
    async () => {
      const { data } = await client.get(`/mypage/notice`);
      return data;
    },
    {
      enabled: Boolean(_id), // _id 값이 존재하는 경우에만 쿼리 실행
    },
  );
};