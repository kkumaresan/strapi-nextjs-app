import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Nav() {
  return (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabindex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className='uppercase'>Best Sellers</a></li>
          <li>
            <a className='uppercase'>Tickets</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a className='uppercase'>Food</a></li>
        </ul>
      </div>
      {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      <Link href="/">
        <img src="https://cdn.cobone.com/images/cobone-v2-en.svg" className='h-8' alt="" />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a className='uppercase'>Best Sellers</a></li>
        <li tabindex="0">
          <details>
            <summary className='uppercase'>Tickets</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a className='uppercase'>Food</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Login</a>
    </div>
  </div>

  )
}

// https://cdn.cobone.com/images/cobone-v2-en.svg