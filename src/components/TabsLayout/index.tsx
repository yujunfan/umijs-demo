import { useState, useEffect } from 'react';
import { Button, Tabs } from 'antd';
import { useHistory, useLocation } from 'umi';
const { TabPane } = Tabs;

interface TrueMenu {
  path: string;
  name: string;
  routes: TrueMenu[];
}

const TabsLayout = (props: any) => {
  const { routes } = props;
  const [activeKey, setActiveKey] = useState<string>('/dashboard');
  const [menuList, setMenuList] = useState<string[]>([]);
  const history = useHistory();
  const location = useLocation();

  /** 点击tab */
  useEffect(() => {
    if (location.pathname === '/') return;
    setActiveKey(location.pathname);
    if (!menuList.some((item) => item === location.pathname)) {
      setMenuList([...menuList, location.pathname]);
    }
  }, [location.pathname]);

  //树扁平化
  const flatten = (data: any) => {
    return data.reduce(
      (arr: any, { path, name, routes = [] }: TrueMenu) =>
        arr.concat([{ path, name }], flatten(routes)),
      [],
    );
  };

  const getTabName = (curPathname: string) => {
    const trueMenu = flatten([...routes]);
    const find = trueMenu.find((item: TrueMenu) => item.path === curPathname);
    return find?.name;
  };

  //删除tab
  const delTab = (key: any) => {
    setMenuList(menuList.filter((item) => item !== key));
  };
  return (
    <div>
      <div
        id="tab"
        style={{ background: '#fff', margin: '-20px -15px 0 -15px' }}
      >
        <Tabs
          tabBarGutter={0}
          type="editable-card"
          size="small"
          activeKey={activeKey}
          onEdit={(key) => delTab(key)}
          onChange={(activeKey) => history.push(activeKey)}
          hideAdd
        >
          {menuList &&
            menuList.map((item: any) => {
              return (
                <TabPane
                  style={{ margin: '0' }}
                  tab={getTabName(item)}
                  key={item}
                />
              );
            })}
        </Tabs>
      </div>
      {props.children}
    </div>
  );
};
export default TabsLayout;
