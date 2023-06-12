import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useUserMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }) =>
      client.post('/user/login', { email: email, password: password }),
    onSuccess: (data) => {
      console.log('로그인 완료', data);
    },
    onError: (error) => {
      console.log('로그인 오류발생!', error);
    },
  });
};

export default useUserMutation;
