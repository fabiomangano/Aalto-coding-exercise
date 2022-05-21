import React from 'react';
import { User } from '../../../models';
import { getUsers } from '../../../services/Users';

const useUserIds = (url: string) => {
  const [userIds, setUserIds] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userRes = await getUsers(url);
      const ids = userRes.data.map((user: User) => user.id)
      setUserIds(ids);
    }

    try {
      fetchData()
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }

  }, [url]);

  return {
    userIds,
    isLoading,
    hasError
  }

};

export default useUserIds;