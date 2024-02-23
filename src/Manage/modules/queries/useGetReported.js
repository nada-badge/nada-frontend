/* useGetReported 공지사항 게시글 list 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetReportedPost = () => {
  return useQuery(['getReportedPost'], async () => {
    const { data } = await client.get(`/community/post/reportedList`);
    return data.posts.reverse();
  });
};

export const useGetReportedComment = () => {
  return useQuery({
    queryKey: ['getReportedComment'],
    queryFn: async () => {
      const { data } = await client.get(`/community/comment/reportedList`);
      return data;
    },
    select: (data) =>
      (data.reportedComments || []).map((data) => ({
        ...data,
        region: [],
        field: [],
      })),
  });
};
