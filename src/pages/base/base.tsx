import { useParams } from 'umi';
import { useEffect } from 'react';
import { GetAllCommunity } from '@/services/api';
import { connect } from 'dva';
import { Button } from 'antd';
const Base = (props: any) => {
  useEffect(() => {
    GetAllCommunity({}).then((res: any) => {
      console.log(res, 'this sir es');
      // window.g_app._store.dispatch({
      //   type: 'counter/add',
      // });
    });
  }, []);
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
