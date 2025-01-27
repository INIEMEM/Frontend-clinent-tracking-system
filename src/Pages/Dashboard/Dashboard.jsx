import React from 'react'
import Widgets from '../../Components/Widgets/Widgets'
import { UsergroupAddOutlined } from '@ant-design/icons'
import { ClientsIcon } from '../../Components/Icons/Icons'
import LineChart from '../../Components/Graphs/LineChart'
import BarChart from '../../Components/Graphs/BarChart'
import PieChart from '../../Components/Graphs/PieChart'

const Dashboard = () => {
  return (
    <main style={{padding: '20px'}}>
      <h1 style={{fontSize: '2rem'}}>Dashboard</h1>
      <section className="flex" style={{gap: 20}}>
        <Widgets icon={<UsergroupAddOutlined />} text={'Total Prospects'} matrixs={60}/>
        <Widgets icon={<ClientsIcon width={40} height={35} />} text={'Total Clients'} matrixs={60}/>
      </section>
      <section className="flex">
        <LineChart/>
        <BarChart/>
      </section>
      <section className='flex'>
        <PieChart/>
        <div style={{flex:1}}>hjsa</div>
      </section>
    </main>
  )
}

export default Dashboard