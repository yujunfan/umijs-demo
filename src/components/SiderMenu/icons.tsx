import {
  HomeOutlined,
  SettingFilled,
  DatabaseOutlined,
} from '@ant-design/icons';
const getIcon = (icon: any) => {
  switch (icon) {
    case 'HomeOutlined':
      return <HomeOutlined />;
    case 'SettingFilled':
      return <SettingFilled />;
    case 'DatabaseOutlined':
      return <DatabaseOutlined />;
    default:
      return '';
  }
};
export default getIcon;
