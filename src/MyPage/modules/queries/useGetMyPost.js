/* useGetMyPost community Comment 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetMyPost = ({ email }) => {
  return useQuery(
    ['getMyPost'],
    async () => {
      const { data } = await client.get(`/community/post/mylist`, {
        params: { email: email },
      });
      return data.posts.reverse();
    },
    {
      enabled: Boolean(email), // _id 값이 존재하는 경우에만 쿼리 실행
      select: (data) => {
        return (data || []).map((item) => ({
          ...item,
          imageUrl: item.imageUrl[0],
        }));
      },
    },
  );
};
