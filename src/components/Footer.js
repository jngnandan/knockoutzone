import React from 'react'

import facebook from '../assets/icons/facebook.svg'
// import instagram from '../assets/icons/instagram.svg'
// import twitter from '../assets/icons/twitter.svg'

import knockoutzone from '../../src/assets/icons/knockoutzone.svg'


export default function Footer() {
  return (
    <div className='my-10 px-6 md:px-16 h-16 lg:px-44 xl:px-60 font-medium text-sm flex flex-row justify-between items-center mt-0'>
            <img src={knockoutzone} alt='logo' className='h-14'/>
      <div className=''>
      <a href="https://www.facebook.com/profile.php?id=100086701121082">
      <img src={facebook} className='h-8' />
      </a>
      </div>
    </div>
  )
}
