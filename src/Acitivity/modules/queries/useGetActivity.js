import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { calculateDday } from '../calculateDday';

export const useActivity = ({ _id }) => {
  return useQuery({
    queryKey: ['getActivity', _id],
    queryFn: async () => {
      const { data } = await client.get('/activity', {
        params: { _id: _id },
      });
      return data.activity;
    },
    staleTime: 90000,
  });
};

export const useActivityList = ({ filter } = {}) => {
  const { region, field, category } = filter.subButtonSelect;

  return useQuery({
    queryKey: ['getActivityList', region, field, category],
    queryFn: async () => {
      const params = {
        category: category || ['전체'],
        region: region || ['전국'],
        field: field || ['전체'],
      };
      const { data } = await client.get('/activity/list', {
        params,
      });
      console.log(data);
      return data;
    },
    staleTime: 90000,
    select: (data) =>
      (data.activities || []).map(
        ({ _id, activityName, endedAt, mainImageUrl }) => ({
          _id: _id,
          activityName: activityName,
          Dday: calculateDday(endedAt),
          mainImageUrl,
        }),
      ),
    onError: (error) => {
      console.log(error, region, field, category);
    },
    retry: (failureCount, error) => {
      if (error.response && error.response.status === 404) {
        return false; // 리트라이 하지 않음
      }
      return failureCount < 3; // 여기서는 최대 3번까지 리트라이
    },
  });
};
