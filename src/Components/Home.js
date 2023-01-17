import React from 'react'
import Navbar from './Navbar'
import './CSS/style-2.css'
import Chat from './Chat'
import MyAccount from './MyAccount'
import MScreen from './MScreen'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="container-3">
          <div className="sub-container-3">
            <Chat/>
          </div>
          <div className="sub-container-4">
            <MScreen/>
          </div>
          <div className="sub-container-5">
            <MyAccount/>
          </div>
        </div>
    </>
  )
}
