/** usePostQuery 댓글과 답글을 update 하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useUpdateQuery = () => {
  return useMutation({
    mutationFn: ({ url, _id, content }) =>
      client.patch(`${url}`, {
        _id: _id,
        content: content,
      }),
    onSuccess: (data) => {
      console.log('댓글이 수정되었습니다.', data);
    },
    onError: (error) => {
      console.log('댓글 수정에 실패하였습니다.', error);
    },
  });
};

export default useUpdateQuery;
