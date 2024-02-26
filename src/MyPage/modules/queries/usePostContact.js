/** usePostContact 문의사항을 전송하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import client from '../../../lib/api/client';
import { Toast } from '../../../components/common/Toast';

const usePostContact = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ sender, title, content, imageUrl }) =>
      client.post(`/contact`, {
        sender: sender,
        title: title,
        content: content,
        imageUrl: imageUrl,
      }),
    onSuccess: (data) => {
      navigate('/myPage/contact');
      Toast({ text: '문의사항이 전송되었습니다' });
    },
    onError: (error) => {
      navigate('/myPage/contact');
      Toast({ text: '문의사항 전송이 실패하였습니다.' });
    },
  });
};

export default usePostContact;
