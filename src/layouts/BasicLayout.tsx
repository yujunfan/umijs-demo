import { Layout, Menu } from 'antd';
import React, { Suspense, createContext } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SiderMenuWrapper from '../components/SiderMenu';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import Context from './MenuContext';
const { Header, Content, Footer, Sider } = Layout;
const BasicLayout = (props: any) => {
  const layout = (
    <Layout style={{ height: '100vh' }}>
      <SiderMenuWrapper {...props} />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 760 }}
          >
            {/* <TabsLayout {...props} /> */}
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );

  return (
    <>
      <DocumentTitle title={'title'}>
        {/* <ContainerQuery>
        {params => (
          <Context.Provider value={{text:'rtext'}}> */}
        <div>{layout}</div>
        {/* </Context.Provider>
        )}
      </ContainerQuery> */}
      </DocumentTitle>
      <Suspense fallback={null}>
        {' '}
        <div>loading</div>
      </Suspense>
    </>
  );
};
export default BasicLayout;
