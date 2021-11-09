import { useParams } from 'umi';
import { useEffect } from 'react';
import { GetAllCommunity } from '@/services/api';
export default function TestPage() {
  const params = useParams();
  useEffect(() => {
    GetAllCommunity({}).then((res: any) => {
      console.log(res, 'this sir es');
    });
  }, []);
  console.log(JSON.stringify(params), 'params');
  return (
    <div>
      <h1>base</h1>
    </div>
  );
}
