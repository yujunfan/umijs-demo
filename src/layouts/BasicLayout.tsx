import { Layout } from 'antd';
import React, { Suspense, createContext } from 'react';

// @ts-ignore
import SiderMenuWrapper from '../components/SiderMenu';
// @ts-ignore
import DocumentTitle from 'react-document-title';

// @ts-ignore
import Context from './MenuContext';
import TabsLayout from '@/components/TabsLayout';
const { Header, Content, Footer, Sider } = Layout;
console.log('da yin da yin');

const BasicLayout = (props: any) => {
  const layout = (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <SiderMenuWrapper {...props} />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, background: '#314fa9' }}
        ></Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 760 }}
          >
            <TabsLayout {...props} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          {/* Ant Design ©2018 Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );

  return (
    <>
      <DocumentTitle title={'My Web App'}>
        {/* <Context.Provider value={{ text: 'rtext' }}> */}
        <div>{layout}</div>
        {/* </Context.Provider> */}
      </DocumentTitle>
    </>
  );
};
export default BasicLayout;
