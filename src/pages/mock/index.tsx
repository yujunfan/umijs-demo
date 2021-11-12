import useRequest from '@ahooksjs/use-request';
import { FC, useEffect, useState } from 'react';

const MockData: FC = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    fetch('/api/users/1')
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  return <div>{user?.name}</div>;
};
export default MockData;
