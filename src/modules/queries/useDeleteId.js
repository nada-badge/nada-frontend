/** useDeleteId id를 소유하고있는 컨텐츠를 삭제하는 delete query */

import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useDeleteId = () => {
  return useMutation({
    mutationFn: ({ url, _id }) => client.delete(`${url}`, { data: { _id } }),
    onSuccess: (data) => {
      console.log('삭제되었습니다.', data);
    },
    onError: (error) => {
      console.log('삭제에 실패하였습니다.', error);
    },
  });
};

export default useDeleteId;
