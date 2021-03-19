import React, {useState} from 'react';
import {Layout} from 'antd'
import {HeaderCustom} from './components/layout'
import './style/index.less';
import './style/antd/index.less';

const { Header, Sider, Content, Footer } = Layout

function App() {
    const [collapsed, setCollapsed] = useState<Boolean>(false)

  return (
      <Layout>
          <Header>
              <HeaderCustom {...{collapsed, setCollapsed}} />
          </Header>
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
