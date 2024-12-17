import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/SideBar/Sidebar'
import Topbar from '../Components/TopBar/Topbar';
import './layouts.css'
const DashoardLayout = () => {
  return (
    <div style={{position: 'relative'}}>
      <Sidebar/>
      <Topbar/>
      <div className='dashboard-outlet' >
        <Outlet />
      </div>
    </div>
  )
}

export default DashoardLayout