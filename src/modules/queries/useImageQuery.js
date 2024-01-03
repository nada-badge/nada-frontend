/** useImageQuery image를 post하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useImageQuery = () => {
  return useMutation({
    mutationFn: async ({ section, files }) => {
      const formData = new FormData();
      formData.append('section', section);

      files.forEach((file) => {
        formData.append(`file`, file);
      });

      const { data } = await client.post(`/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data; // 또는 필요한 데이터를 반환
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.log('이미지 불러오기에 실패하였습니다.', error);
    },
  });
};

export default useImageQuery;
