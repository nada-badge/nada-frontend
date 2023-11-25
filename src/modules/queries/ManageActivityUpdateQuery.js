/* ManageActiveQuery 관리자 게시물 등록을 수행하는 쿼리 */
import client from '../../lib/api/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useUpdate = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
      _id,
      activityName,
      groupName,
      field,
      category,
      region,
      content,
      start,
      ended,
    }) =>
      client.patch(`/activity`, {
        _id: _id,
        activityName: activityName,
        groupName: groupName,
        field: field,
        category: category,
        region: region,
        content: content,
        startedAt: start,
        endedAt: ended,
      }),
    onSuccess: (data) => {
      console.log('게시물이 수정되었습니다.', data);
      alert('등록되었습니다.');
      navigate('/manage/Activity');
    },
    onError: (error) => {
      console.log('게시물 수정에 실패하였습니다.', error);
      alert('실패.');
      navigate('/manage/Activity');
    },
  });
};

export default useUpdate;
