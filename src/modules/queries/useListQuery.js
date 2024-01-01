/* useListQuery community에 list를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useListQuery = ({ type, filter }) => {
  return useQuery(
    ['getPostList', type, filter],
    async () => {
      // 커뮤니티 게시글 리스트
      if (type === 'community') {
        const { buttonSelect, subButtonSelect } = filter;
        const resp = await client.get('/community/post/list', {
          params: {
            mainCategory: buttonSelect.maincategory,
            region: subButtonSelect.region,
            field: subButtonSelect.field,
            category: subButtonSelect.category,
          },
        });

        return resp.data.posts.reverse();

        // 활동 검색 리스트
      } else if (type === 'activity') {
        const data = await client.get('/');
      }
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

export default useListQuery;
