import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useEventsQuery = ({ start, end }) => {
  return useQuery({
    queryKey: ['getEvnets'],
    queryFn: async () => {
      const email = localStorage.getItem('email');

      const { data } = await client.get('calendar/bookmark/list', {
        params: { email: email, start: start, end: end },
      });
      return data;
    },
    select: (data) =>
      (data.activities || []).map((e, idx) => ({
        title: e.activityName,
        start: e.startedAt.slice(0, 10),
        end: e.endedAt.slice(0, 10),
        color: `hsl(${(idx * 20) % 350},100%, 75%)`,
      })),
  });
};

export default useEventsQuery;
