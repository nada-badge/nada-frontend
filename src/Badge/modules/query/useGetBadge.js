import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { decodeJwtToken } from '../../../Auth/modules/decodeJwtToken';

export const useBadgeList = () => {
  return useQuery({
    queryKey: ['getBadgeList'],
    queryFn: async () => {
      const { data } = await client.get('/badge/list', {
        params: { email: 'group01mem01@gmail.com' },
      });
      return data;
    },
    staleTime: 10000,
    select: (data) =>
      (data.badges || []).map(
        ({ badgeImageUrl, category, issuedAt, badgeName, groupInfo }) => ({
          img_src: badgeImageUrl,
          badgeType: category,
          year: issuedAt.slice(0, 4),
          title: badgeName,
          team: groupInfo.team,
          role: groupInfo.role,
        }),
      ),
  });
};
