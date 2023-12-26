import { useMemo, useEffect, useState } from 'react';
import { useActivityListQuery } from '../queries/ActivityQuery';
import { calculateDday } from './calculateDday';

export const useGetActivities = () => {
  const [activities, setActivities] = useState([]);

  const { data } = useActivityListQuery();

  const formattedActivities = useMemo(() => {
    if (!data) {
      return [];
    }

    return (data.activities || []).map(
      ({ _id, activityName, endedAt, imageUrl }) => ({
        _id: _id,
        activityName: activityName,
        Dday: calculateDday(endedAt),
        imageUrl: imageUrl,
      }),
    );
  }, [data]);

  useEffect(() => {
    const Acitivities = formattedActivities;

    setActivities(Acitivities);
  }, [activities, data]);

  return activities;
};
