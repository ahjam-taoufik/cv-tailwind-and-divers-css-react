import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: 'Shop',
      path: 's',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ];

  return (
    // <div className="fixed bottom-5 bg-slate-300 w-screen">
    <div className="fixed bottom-5  w-screen">
      <div className="flex justify-center">
        {navItems.map((item,index) => (
          <NavLink 
          key={index} 
          to={item.path}
          // className={({isActive}) => (isActive? 'text-white bg-slate-500' : 'text-white')}
          className={({isActive}) => (isActive? 'active-state' : 'inactive-state')}
           >{item.icon}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
