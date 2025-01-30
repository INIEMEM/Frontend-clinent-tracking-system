import React from 'react'
import { Link } from 'react-router-dom'
import './userCard.css'
import { LinkOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons'
const UserCard = ({role, name, portfolioLink, socialHandle, image, link, key}) => {

  
  return (
   
      <Link key={key} to={link} className='user-card-holder flex flex-justify-between' style={{borderLeft: `${role === 'cold' ? '6px solid var(--blue-color)' : role === 'warm'? '6px solid var(--orange-color)': '6px solid var(--green-color)' }`,}}>
         <ul className='flex flex-column flex-justify-between'>
            <li style={{fontWeight: 'bold'}}><UserOutlined/> {name}</li>
            <li><LinkOutlined/> {portfolioLink}</li>
            <li><TwitterOutlined/> {socialHandle}</li>
         </ul>
         <img src={image} alt={name?.charAt(0)?.toUpperCase()} style={{borderRadius: '50%', height: '5.8rem', width: '5.8rem', objectFit: 'cover'}}/>
      </Link>
   
  )
}

export default UserCard