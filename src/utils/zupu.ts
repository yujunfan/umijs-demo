interface DataType {
  name: string;
  mate: string;
  children: string[];
}
interface ZPDataType {
  [key: string]: DataType;
}

const zp: ZPDataType = {
  '80': { name: '坤兴公', mate: '', children: ['用贵公'] },
  '81': { name: '用贵公', mate: 'bbb', children: ['aaa'] },
};
