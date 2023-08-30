import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useUserMutation = () => {
  return useMutation({
    mutationFn: ({ email, password, userName, phoneNumber }) =>
      client.post('/user/signUp', {
        userType: 1,
        email: email,
        password: password,
        userName: userName,
        phoneNumber: phoneNumber,
      }),
    onSuccess: (data) => {
      console.log('회원가입 완료', data);
    },
    onError: (error, data) => {
      console.log('오류발생!', error, data);
    },
  });
};

export const useTeamUserMutation = () => {
  return useMutation({
    mutationFn: ({
      email,
      password,
      phoneNumber,
      groupName,
      category,
      represent,
    }) =>
      client.post('/user/signUp', {
        email: email,
        password: password,
        userType: 2,
        phoneNumber: phoneNumber,
        groupName: groupName,
        category: category,
        represent: represent,
      }),

    onSuccess: (data) => {
      console.log('회원가입 완료', data);
    },
    onError: (error, data) => {
      console.log('오류발생!', error, data);
    },
  });
};
