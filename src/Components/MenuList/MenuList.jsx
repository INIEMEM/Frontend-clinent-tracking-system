import React from 'react'
import { Menu } from 'antd'
import { FieldTimeOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { ClientsIcon } from '../Icons/Icons'
import { Link } from 'react-router-dom'
const MenuList = ({toggle}) => {
  return (
    <Menu style={{ height: '100vh'}}>
      <Menu.Item key="home" icon = {<HomeOutlined/>}>
        <Link to='/dashboard'>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="prospects" icon = {<UsergroupAddOutlined />}>
        <Link to='/prospects'>Prospects</Link>
      </Menu.Item>
      <Menu.Item className='flex flex-align' key="clients" icon = {<ClientsIcon width={20} height={15}/>}>
        <Link to='/clients'>{!toggle && 'Client'}</Link>
      </Menu.Item>
      <Menu.Item key="schedules" icon = {<FieldTimeOutlined />}>
        <Link to='/schedules'>schedules</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuList