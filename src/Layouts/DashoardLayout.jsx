import React from 'react'
import { Outlet } from 'react-router-dom'
import {  Button, Layout } from 'antd';
const { Header, Sider, Content } = Layout;
// import Sidebar from '../Components/SideBar/Sidebar'
// import Topbar from '../Components/TopBar/Topbar';
import './layouts.css'
import { AlertOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MenuList from '../Components/MenuList/MenuList';


// Ant design
// Pixels is an absolute unit of measurement.
// 16px -> 1rem
const DashoardLayout = () => {
  const [userName, setUserName] = useState('Iniemem');
  const [isToggle, setIsToggle] = useState(false)
    return (
    <Layout>
      <Sider collapsed={isToggle} style={{background: 'white', borderRight: '1px solid #ddd', height: '100vh'}}>
        <MenuList toggle = {isToggle}/>
      </Sider>
      <Layout>
        <Header style={{background: 'white', padding: '0 20px'}} className='flex flex-justify-between flex-align'>
          <div className='flex flex-align'>
            <Button type='button' icon ={<MenuFoldOutlined/>}  
            onClick={()=>setIsToggle(!isToggle)}       
            ></Button>
            <p style={{fontWeight: 500}}>Welcome {userName}</p>
          </div>
          <div className='flex flex-align' style={{gap: 10}}>
            <Button icon={<UserOutlined />}></Button>
            <Button icon={<AlertOutlined />}></Button>
          </div>
        </Header>
        <Content style={{background: '#fcfcfc'}}>
          <Outlet/>
        </Content>
      </Layout>

    </Layout>
  )
}

export default DashoardLayout