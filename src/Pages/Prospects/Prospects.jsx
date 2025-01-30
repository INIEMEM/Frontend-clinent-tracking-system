import { PlusCircleFilled, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, Table, Modal } from 'antd'
import React, { useState } from 'react'
import Widgets from '../../Components/Widgets/Widgets'
import { AllProspectsIcon, ColdProspectsIcon } from '../../Components/Icons/Icons'
import UserCard from '../../Components/UserCard/UserCard'

const Prospects = () => {
  const prospectData = [
    {role: 'warm', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'cold', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'contract', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  ]
  const [view, setView] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Social Handle',
      dataIndex: 'socialHandle',
      key: 'socialHandle',
    },
    {
      title: 'Portfolio Link',
      dataIndex: 'portfolioLink',
      key: 'portfolioLink',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];
  return (
    <div style={{padding: '1.2rem'}}>
        <div className="flex flex-justify-between flex-align">
          <h1 style={{fontSize: '2rem'}}>Prospects</h1>
          <Button icon={<PlusCircleFilled/>} style={{height: 45}} onClick={showModal}>Add Prospects</Button>
        </div>
        <section className="prospect-widgets flex" style={{gap:20, marginTop: 20}}>
            <Widgets icon={<AllProspectsIcon width={60} height={60} />} matrixs={50} text={'All Prospects'}/>
            <Widgets icon={<ColdProspectsIcon width={60} height={60} />} matrixs={50} text={'Cold Prospects'}/>
            <Widgets icon={<UsergroupAddOutlined />} matrixs={50} text={'Warm Prospects'}/>
            <Widgets icon={<UsergroupAddOutlined />} matrixs={50} text={'Contracts'}/>
        </section>

        {view === 'grid' ? (<section className='flex' style={{gap:20, marginTop: 20}}>
          {prospectData && prospectData.map((prospect, index)=> (
            <UserCard key={index} role={prospect.role} name={prospect.name} portfolioLink={prospect.portfolioLink} socialHandle={prospect.socialHandle}/>
          ))}
        </section>): ( <section style={{ marginTop: 20}}>
          <Table columns={columns} dataSource={prospectData}/>
        </section>)}
        

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
       
    </div>
  )
}

export default Prospects