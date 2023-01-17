import React from 'react'
import './CSS/chat.css'

export default function Chat() {
  return (
    <>
    <nav className="chatnav">
    <h2>Chats</h2>
        <div className="sub-container-6">
            
            <input className='btn2' type="text" placeholder='Find Person' />
        </div>
    </nav>
    <div className="container-4">
        <ul className="chat-options">
            <li className='listitem'>Bharat Singh</li>
            <li className='listitem'>Divyanshu Singh</li>
            <li className='listitem'>Aryan Singh</li>
        </ul>
    </div>
    </>
  )
}
