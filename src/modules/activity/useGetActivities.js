import { useMemo, useEffect, useState } from 'react';
import { useActivityListQuery } from '../queries/ActivityQuery';

export const useGetActivities = () => {
  const [activities, setActivities] = useState([]);

  const { data } = useActivityListQuery();

  const formattedActivities = useMemo(() => {
    if (!data) {
      return [];
    }

    return (data.activities || []).map(
      ({ activityName, endedAt, imageUrl }) => ({
        activityName: activityName,
        Dday: calculateDDay(endedAt),
        imageUrl: imageUrl,
      }),
    );
  }, [data]);

  useEffect(() => {
    const Acitivities = formattedActivities;

    setActivities(Acitivities);
  }, [activities, data]);

  function calculateDDay(endedAt) {
    const endDate = new Date(endedAt);
    const timeDiff = endDate - new Date();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }

  return activities;
};
