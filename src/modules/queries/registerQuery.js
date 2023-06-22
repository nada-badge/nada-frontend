import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useUserMutation = () => {
  return useMutation({
    mutationFn: ({ userType, email, password, username, phoneNumber }) =>
      client.post('/user/signUp', {
        userType: userType,
        email: email,
        password: password,
        userName: username,
        phoneNumber: phoneNumber,
      }),
    onSuccess: (data) => {
      console.log('회원가입 완료', data);
    },
    onError: (error) => {
      console.log('오류발생!', error);
    },
  });
};

export default useUserMutation;
