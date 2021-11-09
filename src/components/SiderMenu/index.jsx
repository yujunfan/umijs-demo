import React, { useState, useEffect } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'umi';
import './index.less';
import getIcon from './icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
// const getIcon = (Icon) => {
//   if (typeof Icon === 'string') {
//     return <Icon />;
//   }
//   return Icon;
// };
const getMenuItemPath = (item) => {
  const { name, path } = item;
  const icon = getIcon(item.icon);

  return (
    <Link to={path}>
      {icon}
      <span>{name}</span>
    </Link>
  );
};

const getSubMenuOrItem = (item) => {
  if (item.routes) {
    const { name } = item;
    const icon = getIcon(item.icon);
    return (
      <SubMenu
        key={item.path}
        title={
          <div>
            {icon}
            <span>{name}</span>
          </div>
        }
      >
        {getNavMenuItems(item.routes)}
      </SubMenu>
    );
  }
  return <Menu.Item key={item.path}>{getMenuItemPath(item)}</Menu.Item>;
};

const getNavMenuItems = (menusData) => {
  if (!menusData) {
    return [];
  }
  return menusData
    .filter((item) => item.path && item.name)
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
    <Sider breakpoint="lg" collapsedWidth="0" style={{ background: '#fff' }}>
      <div className="logo" style={{ background: '#314fa9' }}></div>
      <Menu
        // theme="dark"
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
