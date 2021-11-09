import { useParams } from 'umi';
import { useEffect } from 'react';
import { GetAllCommunity } from '@/services/api';
import { connect } from 'dva';
import { Button } from 'antd';
const Base = (props) => {
  const params = useParams();
  useEffect(() => {
    GetAllCommunity({}).then((res: any) => {
      console.log(res, 'this sir es');
      props.dispatch({ type: 'counter/add' });
    });
  }, []);
  console.log(JSON.stringify(params), 'params');
  return (
    <div>
      <h2>Count: {props.counter}</h2>
      <Button onClick={() => props.dispatch({ type: 'counter/add' })}>
        add{' '}
      </Button>
      <Button onClick={() => props.dispatch({ type: 'counter/minus' })}>
        minus{' '}
      </Button>
      <h1>base</h1>
    </div>
  );
};
export default connect((state: any) => ({
  counter: state.counter,
}))(Base);
