import { useState } from 'react';
import { useMutateInterested } from '../../../modules/queries/activity/useMutateActivity';
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { useEffect } from 'react';

export const Star = ({ _id }) => {
  const [active, setActive] = useState(false);

  // 관심활동 등록 (OK) / 삭제 기능
  const { mutate } = useMutateInterested();
  const email = localStorage.getItem('email');

  // //북마크 여부 서버에서 불러오기
  const { data } = useQuery({
    queryKey: ['isBookmarked', _id],
    queryFn: async () => {
      const { data } = await client.get('/calendar/bookmark', {
        params: {
          email: email,
          _id: _id,
        },
      });
      return data.isBookmarked;
    },
    staleTime: 0,
    retry: 0,
  });

  useEffect(() => {
    setActive(data);
  }, [data, setActive]);

  const onClick = async () => {
    setActive(!active);

    // mutateAsync에서 사용할 type 값을 새로운 active 상태를 기반으로 설정
    const type = active ? 'delete' : 'add';

    mutate({
      type: type,
      email: email,
      _id: _id,
    });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M11.0076 3.05431C11.32 2.09295 12.68 2.09295 12.9924 3.05431L14.4599 7.57077C14.5996 8.00071 15.0002 8.2918 15.4523 8.2918H20.2012C21.212 8.2918 21.6323 9.58531 20.8145 10.1795L16.9726 12.9708C16.6069 13.2365 16.4538 13.7075 16.5935 14.1374L18.061 18.6539C18.3734 19.6153 17.2731 20.4147 16.4553 19.8205L12.6133 17.0292C12.2476 16.7635 11.7524 16.7635 11.3867 17.0292L7.54473 19.8205C6.72695 20.4147 5.62662 19.6153 5.93898 18.6539L7.40647 14.1374C7.54616 13.7075 7.39313 13.2365 7.0274 12.9708L3.18548 10.1795C2.36769 9.58531 2.78798 8.2918 3.79882 8.2918H8.5477C8.99976 8.2918 9.40041 8.00071 9.54011 7.57077L11.0076 3.05431Z"
        fill={active ? '#1363FF' : '#D9D9D9'}
      />
    </svg>
  );
};
