/** usePostImage image를 post하고 path를 반환받는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const usePostImage = () => {
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

      return data;
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.log('이미지 불러오기에 실패하였습니다.', error);
    },
  });
};

export default usePostImage;
