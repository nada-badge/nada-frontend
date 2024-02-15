/* useGetNotice 공지사항 게시글 list 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetNoticeList = () => {
  return useQuery(['getNoticeList'], async () => {
    const { data } = await client.get(`/mypage/notice/list`);
    return data.notices.reverse();
  });
};
