import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useEmailQuery = (email) => {
  console.log(email);
  return useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      return data;
    },
    enable: false,
  });
};

export default useEmailQuery;
