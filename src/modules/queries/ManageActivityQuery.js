import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';
import { useNavigate } from 'react-router-dom';

const useSubmit = () => {
  const navigate = useNavigate();
  //1) activityWrite에서 넘겨받은 값 /activity에 post하기
  return useMutation({
    mutationFn: ({
      activityName,
      groupName,
      field,
      category,
      area,
      content,
      start,
      ended,
    }) =>
      client.post(`/activity`, {
        activityName: activityName,
        groupName: groupName,
        field: field,
        category: category,
        area: area,
        content: content,
        startedAt: start,
        endedAt: ended,
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

export default useSubmit;
