/** reportQuery 글을 신고하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useReport = () => {
  const mutation = useMutation({
    mutationFn: ({ _id }) =>
      client.post(`/community/post/report`, {
        post_id: _id,
      }),
    onSuccess: (data) => {
      console.log('글이 신고되었습니다..', data);
    },
    onError: (error) => {
      console.log('글 신고에 실패하였습니다.', error);
    },
  });

  return mutation;
};

export default useReport;
