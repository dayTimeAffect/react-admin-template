import React from 'react';
import { Layout } from 'antd'
import './style/index.less';
// import 'antd/dist/antd.less';
import './style/antd/index.less';

const { Header, Sider, Content, Footer } = Layout

function App() {
  return (
      <Layout>
          <Header>Header</Header>
          <Layout>
              <Sider>Sider</Sider>
              <Layout>
                  <Content>Content</Content>

                  <Footer>Footer</Footer>
              </Layout>
          </Layout>
      </Layout>
  );
}

export default App;
