// 검색 Query
import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useSearchActivity = ({ focus, value }) => {
  return useQuery({
    queryKey: ['searchActivityQuery', focus, value],
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

export const useSearchCommunity = ({ mainCategory, focus, value }) => {
  return useQuery({
    queryKey: ['searchCommunityQuery', mainCategory, focus, value],
    queryFn: async () => {
      if (value) {
        const { data } = await client.get('/community/post/search', {
          params: {
            mainCategory: mainCategory,
            searchBy: focus,
            searchWord: value,
          },
        });
        return data.result;
      }
    },
  });
};
