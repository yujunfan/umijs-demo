import { useParams } from 'umi';
export default function TestPage() {
  const params = useParams();
  console.log(JSON.stringify(params), 'params');
  return (
    <div>
      <h1>base</h1>
    </div>
  );
}
