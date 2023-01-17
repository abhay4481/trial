import React from "react";
import './CSS/style-2.css'
import pic from './logo/Logo-2.png'

export default function Navbar() {
  return (
    <>
      <div className="container-2 back">
        <div className="sub-container-1">
        <div className="logo"><img className="img-1" src={pic} alt="logo" /></div>
          <ul className="nav-list">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact us">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="sub-container-2">
            <input className="search" type="text" />
            <button className="btn btn-sm">Search</button>
        </div>
      </div>
    </>
  );
}
