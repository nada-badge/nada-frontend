import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useDeleteInterested = () => {
  return useMutation({
    mutationFn: ({ type, email, _id }) => {
      if (type === 'delete') {
        return client.delete('/calendar/bookmark', { email: email, _id: _id });
      } else if (type === 'add') {
        return client.post('/calendar/bookmark', { email: email, _id: _id });
      }
    },
    onSuccess: (data) => {
      console.log('완료되었습니다.', data);
    },
    onError: (error) => {
      console.log(' 실패하였습니다.', error);
    },
  });
};
