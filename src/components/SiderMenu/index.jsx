import React, { useState, useEffect } from 'react';
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
    <Link to={`${path}?sort=name`}>
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
  return menusData
    .filter((item) => item.path)
    .map((item) => getSubMenuOrItem(item));
};
const SiderMenuWrapper = React.memo((props) => {
  const { routes, location } = props;
  const [openKeys, setOpenKeys] = useState([]);
  const [selectKeys, setSelectKeys] = useState([]);
  useEffect(() => {
    setSelectKeys(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let _openKeys = [];
    const findRoute = (data, openKeys) => {
      return data.find((item) => {
        if (item.path === location.pathname) {
          _openKeys = openKeys;
          return true;
        }
        if (item.routes)
          return findRoute(item.routes, [...openKeys, item.path]);
        return false;
      });
    };
    findRoute([...routes], []);
    setOpenKeys(_openKeys);
  }, []);

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectKeys}
        onOpenChange={(openKeys) => setOpenKeys(openKeys)}
      >
        {getNavMenuItems(routes[1].routes)}
      </Menu>
    </Sider>
  );
});

export default SiderMenuWrapper;
