import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useEventsQuery = ({ email, start, end }) => {
  return useQuery({
    queryKey: ['getEvnets'],
    queryFn: async () => {
      const { data } = await client.get('calendar/bookmark/list', {
        params: { email: email, start: start, end: end },
      });
      return data;
    },
  });
};

export default useEventsQuery;
