/** usePostComment 댓글과 답글을 post하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../../lib/api/client';

const usePostComment = () => {
  const userName = 'maintest01';
  //추후에 댓글 단 사람의 이메일과 이름으로 위 코드를 수정해야햠.

  return useMutation({
    mutationFn: ({ url, content }) =>
      client.post(`${url}`, {
        userEmail: localStorage.getItem('email'),
        userName: userName,
        content: content,
      }),
    onSuccess: (data) => {
      console.log('댓글이 달렸습니다.', data);
    },
    onError: (error) => {
      console.log('댓글 게시에 실패하였습니다.', error);
    },
  });
};

export default usePostComment;
