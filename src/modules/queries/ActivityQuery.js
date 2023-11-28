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
