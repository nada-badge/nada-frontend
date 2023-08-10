import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';
import { useNavigate } from 'react-router-dom';


const useSubmit = () => {

    const navigate = useNavigate();
    
    return useMutation({
      mutationFn: ({scheduleName,  groupName, field, category, area, content, start, ended }) => 
      client.post(`/schedule`, { 
            scheduleName: scheduleName, 
            groupName: groupName,
            field: field,
            category: category,
            area: area,
            content: content,
            startedAt: start,
            endedAt: ended}),
      onSuccess: (data) => {
        console.log('게시물이 등록되었습니다.', data);
        alert('등록되었습니다.');
        navigate('/board');
      },
      onError: (error) => {
        console.log('게시물 등록에 실패하였습니다.', error);
        alert('실패.');
        navigate('/board');
      },
    });
  };
  
  export default useSubmit;