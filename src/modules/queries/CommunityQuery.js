// usePostListQuery.js

import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const usePostListQuery = (mainCategory) => {
  return useQuery(
    ['getPostList', mainCategory],
    async () => {
      const resp = await client.get('/community/post/list', {
        params: { mainCategory: mainCategory },
      });
      return resp.data.posts.reverse();
    },
    { enabled: Boolean(mainCategory) },
  );
};

export default usePostListQuery;
