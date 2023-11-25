/** useDelete query. delete를 관리하는 query */

import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useDelete = () => {
  return useMutation({
    mutationFn: ({ url, _id }) =>
      client.delete(`${url}`, { data: { _id: _id } }),
    onSuccess: (data) => {
      console.log('삭제되었습니다.', data);
    },
    onError: (error) => {
      console.log('삭제에 실패하였습니다.', error);
    },
  });
};

export default useDelete;
