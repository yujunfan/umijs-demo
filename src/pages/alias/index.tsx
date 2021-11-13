import { FC } from 'react';
import { STable } from 'component';
const Alias: FC<{}> = () => {
  const data = { list: [], total: 0 };
  const loading = false;
  const columns = [{ title: '名称', dataIndex: 'name' }];
  return (
    <div>
      ALIAS
      <STable data={data} pagination={{}} loading={loading} columns={columns} />
    </div>
  );
};
export default Alias;
