import React from 'react'
import './CSS/myAccount.css'

export default function MyAccount() {
  return (
    <>
        <nav className="sub-container-MA1">
            <h2>My Account</h2>
        </nav>
    <div className="container-my-account">
                <ul className="account-list">
                    <li className="listItem-myaccount">Profile</li>
                    <li className="listItem-myaccount">Friends</li>
                    <li className="listItem-myaccount">Saved</li>
                    <li className="listItem-myaccount">Pages</li>
                    <li className="listItem-myaccount">Events</li>
                    <li className="listItem-myaccount">Help</li>
                    <li className="listItem-myaccount">About us</li>
                    <li className="listItem-myaccount">Logout</li>
                </ul>
    </div>
    </>
  )
}
