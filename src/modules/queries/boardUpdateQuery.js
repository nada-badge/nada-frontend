import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';
import { useNavigate } from 'react-router-dom';
import { idSelector } from '../schedule';
import { useSelector } from 'react-redux';

const useUpdate = () => {   

    const navigate = useNavigate();
    const id = useSelector(idSelector); //1)현 게시물의 _id값 가져오기
    console.log("useUpdate가 실행되었습니다. id :", id)

    //2)수정값 patch 하기
    return useMutation({ 
      mutationFn: ({scheduleName, groupName, field, category, area, content, start, ended }) => 
      client.patch(`/schedule`, { 
            _id: id,
            scheduleName: scheduleName, 
            groupName: groupName,
            field: field,
            category: category,
            area: area,
            content: content,
            startedAt: start,
            endedAt: ended}),
      onSuccess: (data) => {
        console.log('게시물이 수정되었습니다.', data);
        alert('수정되었습니다.');
        navigate('/board');
      },
      onError: (error) => {
        console.log('게시물 수정에 실패하였습니다.', error);
        alert('수정에 실패했습니다.');
        navigate('/board');
      },
    });
  };
  
  export default useUpdate;