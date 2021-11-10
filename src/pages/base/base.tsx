import { GetAllCommunity } from '@/services/api';
import { connect } from 'dva';
import { Button } from 'antd';
import { useRequest } from 'ahooks';
import { ExitSearchParams } from '@/utils/cutSearchParam';
const Base = (props: any) => {
  const { data } = useRequest(() => GetAllCommunity({}));
  ExitSearchParams({ aaaa: 'bbbb' });
  return (
    <div>
      <h2>Count: {props.counter}</h2>
      <Button onClick={() => props.dispatch({ type: 'counter/add', delta: 6 })}>
        add
      </Button>
      <Button
        onClick={() => props.dispatch({ type: 'counter/minus', delta: 1 })}
      >
        minus
      </Button>
      <h1>base</h1>
    </div>
  );
};
export default connect(({ counter }: any) => ({
  counter,
}))(Base);
