/** useReportId id를 소유하고있는 컨텐츠를 report하는 query */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useReportId = () => {
  return useMutation({
    mutationFn: ({ url, _id }) => client.post(`${url}`, { _id: _id }),
    onSuccess: (data) => {
      console.log('신고되었습니다.', data);
    },
    onError: (error) => {
      console.log('신고에 실패하였습니다.', error);
    },
  });
};

export default useReportId;
