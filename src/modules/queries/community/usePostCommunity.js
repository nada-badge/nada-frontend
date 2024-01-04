/** usePostCommunity 커뮤니티 게시글을 작성하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import client from '../../../lib/api/client';
import { Toast } from '../../../components/common/Toast';

const usePostCommunity = () => {
  const navigate = useNavigate();

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
      imageUrl,
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
        imageUrl: imageUrl,
      }),
    onSuccess: (data) => {
      navigate('/community');
      Toast({ text: '게시물이 등록되었습니다' });
    },
    onError: (error) => {
      navigate('/community');
      Toast({ text: '게시물 등록에 실패하였습니다.' });
    },
  });
};

export default usePostCommunity;
