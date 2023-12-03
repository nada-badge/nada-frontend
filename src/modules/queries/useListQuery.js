// usePostListQuery.js

import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useListQuery = ({ mainCategory, region, field, category }) => {
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
  );
};

export default useListQuery;
