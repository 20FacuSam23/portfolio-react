import { useState } from 'react'
import './Header.css'
import logo from '/logo.png'

const Header = ({user}) => {
  const{name, lastname}=user
console.log(name)
  return (
    <>
      <div className='header'>
        <a href="#" target="_blank">         
          <img src={user.img} classNemae="logo" alt="ava"/>
          <p>{user.name}</p>
          <p>{user.lastname}</p>
        </a>       
      </div>
    </>
  )
}

export default Header