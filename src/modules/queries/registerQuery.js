import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useUserMutation = () => {
  return useMutation({
    mutationFn: ({ username, password }) =>
      client.post('/user/signUp', { email: username, password: password }),
    onSuccess: (data) => {
      console.log('회원가입 완료', data);
    },
    onError: (error) => {
      console.log('오류발생!', error);
    },
  });
};

export default useUserMutation;
