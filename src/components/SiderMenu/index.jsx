import React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Sider } = Layout;
const { SubMenu } = Menu;

const getIcon = (icon) => {
  if (typeof icon === 'string') {
    return <Icon type={icon} />;
  }
  return icon;
};
const getMenuItemPath = (item) => {
  const { name, path } = item;
  const icon = getIcon(item.icon);
  return (
    <Link to={path}>
      {' '}
      {icon} <span>{name}</span>
    </Link>
  );
};

const getSubMenuOrItem = (item) => {
  if (item.routes) {
    const { name } = item;
    return item.name ? (
      <SubMenu key={item.path} title={name}>
        {getNavMenuItems(item.routes)}{' '}
      </SubMenu>
    ) : (
      getNavMenuItems(item.routes)
    );
  }
  return <Menu.Item key={item.path}>{getMenuItemPath(item)}</Menu.Item>;
};

const getNavMenuItems = (menusData) => {
  if (!menusData) {
    return [];
  }
  return menusData.map((item) => getSubMenuOrItem(item));
};
const SiderMenuWrapper = React.memo((props) => {
  const { routes } = props;

  console.log(props, 'props ');
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={['sub1']}
        defaultSelectedKeys={['/dashboard']}
      >
        {getNavMenuItems(routes)}
      </Menu>
    </Sider>
  );
});

export default SiderMenuWrapper;
