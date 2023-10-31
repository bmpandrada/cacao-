
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export default function Navbar( {data, logo} ) {
  const [isActive, setActive] = useState(false)

  const handleClick = (()=>{
    if(!isActive){
      setActive(true)
    }else{
       setActive(false)
    }
  })
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Image src={logo} alt='logo' width={100} height={100}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {data.map((link, i) => (
              <li className="nav-item" key={i}>
               <Link className="nav-link active effects" aria-current="page" href={link.path}>
                {link.label}
                </Link>
              </li>
            ))}
            
          </ul>
          <form className="d-flex navbar__icon">
          <div className={`${isActive ? "hero active" : "hero" }`}>
      <div id="searchBox">
        <i className="fa-solid fa-magnifying-glass" onClick={handleClick} id="googleIcon"></i>
        <input type="text" placeholder="Search..." />
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
      </form>
        </div>
      </div>
    </nav>
  );
}
