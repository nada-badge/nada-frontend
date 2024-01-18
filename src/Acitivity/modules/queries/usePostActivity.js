/* usePostManage 관리자 게시물 등록을 수행하는 쿼리 */
import client from '../../../lib/api/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const usePostActivity = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
      activityName,
      groupName,
      field,
      category,
      region,
      institute,
      intstituteURL,
      area,
      content,
      imageUrl,
      startedAt,
      endedAt,
    }) =>
      client.post(`/activity`, {
        activityName: activityName,
        groupName: groupName,
        field: field,
        category: category,
        region: region,
        institute: institute,
        intstituteURL: intstituteURL,
        area: area,
        content: content,
        imageUrl: imageUrl,
        startedAt: startedAt,
        endedAt: endedAt,
      }),
    onSuccess: (data) => {
      console.log('게시물이 등록되었습니다.', data);
      alert('등록되었습니다.');
      navigate('/manage/Activity');
    },
    onError: (error) => {
      console.log('게시물 등록에 실패하였습니다.', error);
      alert('실패.');
      navigate('/manage/Activity');
    },
  });
};

export default usePostActivity;
