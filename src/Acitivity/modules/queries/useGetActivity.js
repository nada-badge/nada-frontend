import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { calculateDday } from '../calculateDday';
import { useSelector } from 'react-redux';

// 활동글 하나 불러오기
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

// 필터에 맞게 여러 활동글 불러오기
export const useActivityList = () => {
  const filter = useSelector(({ filter }) => filter);
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
      return data;
    },
    staleTime: 90000,
    select: (data) =>
      (data.activities || []).map(
        ({ _id, activityName, endedAt, imageUrl }) => ({
          _id: _id,
          activityName: activityName,
          Dday: calculateDday(endedAt),
          imageUrl: imageUrl,
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
