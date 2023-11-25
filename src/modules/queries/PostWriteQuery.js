/** postWriteQuery 게시글을 작성하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import client from '../../lib/api/client';

const useSubmit = () => {
  const navigate = useNavigate();

  //1) postWrite에서 넘겨받은 값 /community/post에 post하기
  return useMutation({
    mutationFn: ({
      userEmail,
      userName,
      mainCategorys,
      categorys,
      fields,
      regions,
      title,
      content,
    }) =>
      client.post(`/community/post`, {
        userEmail: userEmail,
        userName: userName,
        mainCategory: mainCategorys,
        category: categorys,
        field: fields,
        region: regions,
        title: title,
        content: content,
      }),
    onSuccess: (data) => {
      console.log('게시물이 등록되었습니다.', data);
      alert('등록되었습니다.');
      navigate('/Community');
    },
    onError: (error) => {
      console.log('게시물 등록에 실패하였습니다.', error);
      alert('실패.');
      navigate('/Community');
    },
  });
};

export default useSubmit;
