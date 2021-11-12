import { Button } from 'antd';
import { FC } from 'react';
import { useModel } from 'umi';
const InitalState: FC = () => {
  const { initialState, loading, error, refresh, setInitialState } =
    useModel('@@initialState');
  return (
    <div>
      <Button onClick={() => refresh()} loading={loading}>
        更新
      </Button>
      {initialState?.users?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
export default InitalState;
