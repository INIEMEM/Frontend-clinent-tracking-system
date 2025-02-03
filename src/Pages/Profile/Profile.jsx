import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Form, Image, Input } from 'antd'
import React from 'react'
import prospectImag from './assets/pros.png'

const Profile = () => {
  return (
    <div style={{padding: 20}}>
      <header className='flex flex-justify-between flex-align'>
        <h1 style={{fontSize:'2rem'}}>Chaindustry Profile</h1>
        <Button icon={<PlusCircleFilled/>}>Edit Profile</Button>
      </header>

      <section>
        <h2 style={{fontSize: '1.2rem'}}>Prospects Data</h2>
        <div className='flex'>
          <Image src={prospectImag}/>
          <Form layout='vertical' >
             <div className="flex">
              <Form.Item name='email' label= 'Email'>
                  <Input placeholder='Johndoe@gmail.com'/>
                </Form.Item>
                <Form.Item name='telegram' label= 'Email'>
                  <Input placeholder='Johndoe@gmail.com'/>
                </Form.Item>
             </div>
             <div className="flex">
              <Form.Item name='email' label= 'Email'>
                  <Input placeholder='Johndoe@gmail.com'/>
                </Form.Item>
                <Form.Item name='email' label= 'Email'>
                  <Input placeholder='Johndoe@gmail.com'/>
                </Form.Item>
             </div>
          </Form>
        </div>
      </section>
    </div>
  )
}

export default Profile