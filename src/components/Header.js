import React, { useState } from 'react';
import { Link } from "react-router-dom";

import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'

import knockoutzone from '../../src/assets/icons/knockoutzone.svg'


export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <div>
        <div className='shadow flex flex-row justify-between items-center h-16 px-6  lg:px-44 xl:px-60 font-medium text-sm'>
          <div className='' onClick={() => setNavbarOpen(true)}>
          <Link to='/'>
            <img src={knockoutzone} alt='logo' className='h-14'/>
          </Link>
          </div>

          <div className='flex flex-row m-5 invisible  md:visible'>
            <Link to='/contactus'>
              <p className='mx-2'>Contact us</p>
            </Link>
          </div>

          {navbarOpen?
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <img src={menu} className='h-5' />
          </button>
          :
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <img src={close} className='h-5' />
          </button>
          }
        </div>

        {!navbarOpen &&
        <div className='px-6 font-medium text-sm pb-4 bg-red-700'>
          <Link to='/security-services' onClick={() => setNavbarOpen(!navbarOpen)}>
                <p className='py-3 text-white hover:text-black w-full'>Security Services</p>
            </Link>
            <Link to='/contactus' onClick={() => setNavbarOpen(!navbarOpen)}>
              <p className='py-3 text-white hover:text-black w-full'>Contact us</p>
            </Link>
        </div>
        }
      </div>
  )
}