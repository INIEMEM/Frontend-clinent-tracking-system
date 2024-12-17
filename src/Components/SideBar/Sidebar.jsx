import React from 'react'
import SideBarContent from './SideBarContent';
import './sidebar.css'
const Sidebar = () => {
  return (
   <div>
      <aside className='dashoard-sidebar'>
        Sidebar
      </aside>
      <aside className='dashoard-sidebar-mobile'>
        Sidebarmobile
      </aside>
   </div>
  )
}

export default Sidebar