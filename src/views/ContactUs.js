import React, { Component } from 'react'

export class ContactUs extends Component {
  render() {
    return (
      <div>
              {/* Get in Touch with Us */}
            <div className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Contact Us</h2>
          <hr className='border-gray-500 my-4 mb-6' />
          
        <form className='grid grid-cols-2 gap-4' type='submit'>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              First Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-gray-700 focus:outline-gray-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Last Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-gray-700 focus:outline-gray-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Email:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-gray-700 focus:outline-gray-400' type="email" name="email" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Service Interested:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-gray-700 focus:outline-gray-400' type="text" name="text" />
            </label>
            <button className='mt-3 shadow w-40 rounded-md bg-gray-900 hover:bg-gray-700 text-white px-4 font-medium text-sm h-10'>Submit</button>

        </form>
      </div>
      </div>
    )
  }
}

export default ContactUs