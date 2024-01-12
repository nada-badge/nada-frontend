/* useGetComment community Comment 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetComment = ({ _id }) => {
  return useQuery(
    ['getComment'],
    async () => {
      const { data } = await client.get(`/community/comment/list/${_id}`, {});
      return data;
    },
    {
      enabled: Boolean(_id), // _id 값이 존재하는 경우에만 쿼리 실행
    },
  );
};
