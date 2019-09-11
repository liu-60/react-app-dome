// import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'src/views/Home';
import Idea from 'src/views/Idea';
import Article from 'src/views/Article';
import { connect } from 'react-redux';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  go = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    const { history, match } = this.props;
    history.push(`${match.path}/${key}`);
  };

  render() {
    const { match } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['/']}
            mode="inline"
            onClick={this.go}
          >
            <Menu.Item key="article">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <SubMenu
              key="/fat"
              title={
                <span>
                  <Icon type="team" />
                  <span>Option sub</span>
                </span>
              }
            >
              <Menu.Item key="idea">idea</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <Switch>
              <Route path={`${match.path}`} exact component={Home} />
              <Route path={`${match.path}/article`} component={Article} />
              <Route path={`${match.path}/idea`} component={Idea} />
              <Redirect to={`${match.url}`} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(SiderDemo);
