import { PlusCircleFilled, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, Table, Modal, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import Widgets from '../../Components/Widgets/Widgets'
import { AllProspectsIcon, ColdProspectsIcon } from '../../Components/Icons/Icons'
import UserCard from '../../Components/UserCard/UserCard'
import './prospects.css'
const { Search } = Input;
const Prospects = () => {
  const prospectData = [
    {role: 'warm', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'cold', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'contract', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  ]
  const [view, setView] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
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

  function handleFiltered(role) {
    if (role === 'all') {
      setFilteredData(prospectData);
    } else {
      setFilteredData(prospectData.filter(data => data.role === role));
    }
  }

  useEffect(()=>{
    setFilteredData(prospectData)
  }, [])
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
        <section className='flex flex-justify-between flex-align' style={{marginTop:20}}>
          <div>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                
              }}
            />
            <div>
              <Button onClick={()=> handleFiltered('all')}>All</Button>
              <Button onClick={()=> handleFiltered('cold')}>Cold</Button>
              <Button onClick={()=> handleFiltered('warm')}>Warm</Button>
              <Button onClick={()=> handleFiltered('contract')}>Contract</Button>
           </div>
          </div>
          <div className='flex  view-toggle'>
            <div className='grid-view-toggle flex flex-center active-toggle' onClick={()=> setView('grid')}>Grid</div>
            <div className='table-view-toggle flex flex-center' onClick={()=>setView('table')}>Table</div>
          </div>
        </section>
        {view === 'grid' ? (<section className='flex' style={{gap:20, marginTop: 20}}>
          {filteredData && filteredData.map((prospect, index)=> (
            <UserCard key={index} role={prospect.role} name={prospect.name} portfolioLink={prospect.portfolioLink} socialHandle={prospect.socialHandle}/>
          ))}
        </section>): ( <section style={{ marginTop: 20}}>
          <Table columns={columns} dataSource={filteredData}/>
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