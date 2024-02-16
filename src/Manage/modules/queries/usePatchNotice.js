/* usePatchManage 관리자 게시물 등록을 수행하는 쿼리 */
import client from '../../../lib/api/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const usePatchNotice = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ _id, title, content }) =>
      client.patch(`/mypage/notice`, {
        _id,
        title,
        content,
      }),
    onSuccess: (data) => {
      console.log('공지사항이 수정되었습니다.', data);
      alert('등록되었습니다.');
      navigate('/manage/notice');
    },
    onError: (error) => {
      console.log('공지사항 수정에 실패하였습니다.', error);
      alert('실패.');
      navigate('/manage/registeredAt');
    },
  });
};

export default usePatchNotice;
