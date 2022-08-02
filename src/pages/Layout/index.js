import {TeamOutlined, UserOutlined,LogoutOutlined, } from '@ant-design/icons';
import {  Layout, Menu ,Space,Popconfirm} from 'antd';
import React,{ useEffect, useState} from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom';
import './index.css'
import routers from '../../routers';
const { Header, Content, Sider } = Layout;

export default function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [name,setName]=useState(localStorage.getItem('items'))
  const navigate = useNavigate()
  useEffect(()=>{
    getItems()
  },[name])
  const getItems=()=>{
  const items=localStorage.getItem('items')
    setName(items)
  }
  const items2 = [
    getItem('菜单一',  '1', <UserOutlined />, [
      getItem('菜单1-1', '/menua'),
      getItem('菜单1-2', '/menub'),
    ]),
    getItem('菜单二', '2', <TeamOutlined />, [getItem('菜单2-1', '/menuc'), getItem(name||'菜单2-2', '/menud')]),
  ];
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
      onClick:(info) => navigate(info.key)
    };
  }
  return (
    <Layout>
    <Header className='header'>
    <div>
      <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'></img>
          react</div>
          <div className='header-right'>
            <Space size='large'>
              <Popconfirm
                placement='bottomRight'
                title='你确定要退出本系统吗?'
                onConfirm={() => {}}
                okText='确认'
                cancelText='取消'
              >
                <LogoutOutlined /> admin
              </Popconfirm>
            </Space>
          </div>
        </Header>
    <Layout>
      <Sider width={200} className="site-layout-background"
       collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
       >
        <Menu
         theme="dark"
          mode="inline"
          defaultSelectedKeys={['/menua']}
          defaultOpenKeys={['/menua']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes> 
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={<item.component />}
            
            />
          );
        })}
      </Routes>
            </Content>
          </Layout>
    </Layout>
  </Layout>
);
}
