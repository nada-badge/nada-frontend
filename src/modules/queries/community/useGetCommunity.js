/* useGetCommunity community의 list를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

const useGetCommunity = ({ mainCategory, region, field, category }) => {
  return useQuery(
    ['getPostList', mainCategory, region, field, category],
    async () => {
      const resp = await client.get('/community/post/list', {
        params: {
          mainCategory: mainCategory,
          region: region,
          field: field,
          category: category,
        },
      });

      return resp.data.posts.reverse();
    },
    {
      retry: (failureCount, error) => {
        if (error.response && error.response.status === 404) {
          return false; // 리트라이 하지 않음
        }
        // 다른 에러는 기본적으로 리트라이
        return failureCount < 3; // 여기서는 최대 3번까지 리트라이
      },
    },
  );
};

export default useGetCommunity;
