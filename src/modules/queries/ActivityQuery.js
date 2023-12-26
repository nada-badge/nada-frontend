import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useActivityQuery = ({ _id }) => {
  return useQuery({
    queryKey: ['getActivity'],
    queryFn: async () => {
      const { data } = await client.get('/activity', {
        params: { _id: _id },
      });
      return data;
    },
  });
};

export const useActivityListQuery = ({
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
  });
};
