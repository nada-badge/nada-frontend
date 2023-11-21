import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useEventsQuery = ({ email, year, month }) => {
    return useQuery({
        queryKey: ['getEvnets'],
        queryFn: async () => {
            const { data } = await client.get('calendar/bookmark/list', {
                params: { email: email, year: year, month: month }
            });
            return {data};
        }
    });
}

export default useEventsQuery;