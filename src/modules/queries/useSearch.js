// 검색 Query
import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useSearch = ({ focus, value }) => {
  return useQuery({
    queryKey: ['searchQuery', focus, value],
    queryFn: async () => {
      if (value) {
        const keys = {
          제목: 'activityName',
          본문: 'content',
          작성자: 'groupName',
        };
        const { data } = await client.get('/activity/search', {
          params: { [keys[focus]]: value },
        });
        return data.result;
      }
    },
  });
};
