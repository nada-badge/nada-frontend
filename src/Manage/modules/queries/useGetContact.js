/* useGetContact 문의사항 게시글 list 정보를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetContact = ({ _id }) => {
  return useQuery(['getContact'], async () => {
    const { data } = await client.get(`/contact/${_id}`, {});
    return data.contact;
  });
};

export const useGetContactList = () => {
  return useQuery(['getContactList'], async () => {
    const { data } = await client.get(`/contact/list`);
    return data;
  });
};
