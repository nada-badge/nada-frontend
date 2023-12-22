/** useImageQuery image를 post하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useImageQuery = () => {
  return useMutation({
    mutationFn: ({ section, file }) =>
      client.post(`/image`, {
        section: section,
        file: file,
      }),
  });
};

export default useImageQuery;
