import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) =>
      client.post('/user/login', { email: email, password: password }),
    onSuccess: (data) => {
      return true;
    },
    onError: (error) => {
      console.log('로그인 오류발생!', error);
      return false;
    },
  });
};

export default useLogin;
