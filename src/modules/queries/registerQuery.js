import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useUserMutation = () => {
  return useMutation((username, password) =>
    client.post('/user/signup', { username, password }),
  );
};

export default useUserMutation;
