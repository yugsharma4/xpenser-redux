import React from 'react'
import "./header.css";


const Header = () => {
  return (
    <div className='header-container'>
        <div className="header">
            <div className="header__logo">
                Xpenser <i className='fi-rr-credit-card'></i>
            </div>
            <div className="header__button">
                <a href="https://github.com" target="_blank" rel='noopener noreferrer'><i class="devicon-github-original colored"></i>Github</a>
            </div>
        </div>
    </div>
  )
}

export default Header