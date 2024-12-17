import React from 'react';
import './topbar.css';
const Topbar = () => {
  return (
    <div className='topbar-container flex flex-justify-between'>
      <div className='flex' style={{gap: 20}}>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.125 4.5H21.625M7.125 19.5H21.625M14.125 9.5H21.625M14.125 14.5H21.625" stroke="#252424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 16.5C8.06847 16.5 9.21307 16.0259 10.057 15.182C10.9009 14.3381 11.375 13.1935 11.375 12C11.375 10.8065 10.9009 9.66193 10.057 8.81802C9.21307 7.97411 8.06847 7.5 6.875 7.5C5.68153 7.5 4.53693 7.97411 3.69302 8.81802C2.84911 9.66193 2.375 10.8065 2.375 12C2.375 13.1935 2.84911 14.3381 3.69302 15.182C4.53693 16.0259 5.68153 16.5 6.875 16.5ZM4.875 11.5C4.74239 11.5 4.61521 11.5527 4.52145 11.6464C4.42768 11.7402 4.375 11.8674 4.375 12C4.375 12.1326 4.42768 12.2598 4.52145 12.3536C4.61521 12.4473 4.74239 12.5 4.875 12.5H8.875C9.00761 12.5 9.13479 12.4473 9.22855 12.3536C9.32232 12.2598 9.375 12.1326 9.375 12C9.375 11.8674 9.32232 11.7402 9.22855 11.6464C9.13479 11.5527 9.00761 11.5 8.875 11.5H4.875Z" fill="#252424"
            />
          </svg>
        </div>
        <p>Welcome Iniemem</p>
      </div>
      <div className='flex' style={{gap: 20}}>
        <div>I</div>
        <div><i class="fa-solid fa-right-from-bracket"></i></div>
      </div>
    </div>
  )
}

export default Topbar