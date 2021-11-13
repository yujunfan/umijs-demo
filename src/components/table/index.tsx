import { Table, Tooltip } from 'antd';

interface dataProps {
  list: any[];
  total: number;
}

interface tableProps {
  data: dataProps;
  columns: any[];
  pagination: any;
  loading: boolean;
}

const STable = ({
  data = { list: [], total: 0 },
  columns,
  pagination,
  loading,
}: tableProps) => {
  const newColumns = columns.map((item) => {
    if (item.render) return { ...item, align: 'center' };
    return {
      ...item,
      align: 'center',
      ellipsis: { showTitle: false },
      render: (text: any) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    };
  });
  return (
    <Table
      dataSource={data.list}
      rowKey={(record) => record.id}
      columns={newColumns}
      bordered
      pagination={{
        ...pagination,
        showLessItems: true,
        showSizeChanger: false,
        showQuickJumper: true,
        showTotal: (total) => `共${total}条`,
      }}
      size={'small'}
      loading={loading}
    />
  );
};
export default STable;
