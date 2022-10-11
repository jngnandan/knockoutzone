import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'

export default function Footer() {
  return (
    <div className='my-10 px-6 md:px-16 h-16 lg:px-44 xl:px-60 font-medium text-sm flex flex-row justify-between items-center mt-0'>
      <p>SSG Security</p>
      <div className='grid grid-cols-3 gap-4 text-center'>
      <a>
      <img src={facebook} className='h-8' />
      </a>
      <a>
      <img src={instagram} className='h-8' />
      </a>
      <a>
      <img src={twitter} className='h-8' />
      </a>
      </div>
    </div>
  )
}
