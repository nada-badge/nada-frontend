import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { calculateDday } from '../../activity/calculateDday';

// 활동글 하나 불러오기
export const useActivity = ({ _id }) => {
  return useQuery({
    queryKey: ['getActivity'],
    queryFn: async () => {
      const { data } = await client.get('/activity', {
        params: { _id: _id },
      });
      return data.activity;
    },
  });
};

// 활동글 여러개 불러오기
export const useActivityList = ({
  groupName,
  field,
  region,
  category,
} = {}) => {
  return useQuery({
    queryKey: ['getActivityList'],
    queryFn: async () => {
      const params = {
        ...(groupName && { groupName }),
        category: category || ['전체'],
        region: region || ['전국'],
        field: field || ['전체'],
      };
      const { data } = await client.get('/activity/list', {
        params,
      });
      return data;
    },

    select: (data) =>
      (data.activities || []).map(
        ({ _id, activityName, endedAt, imageUrl }) => ({
          _id: _id,
          activityName: activityName,
          Dday: calculateDday(endedAt),
          imageUrl: imageUrl,
        }),
      ),
  });
};
