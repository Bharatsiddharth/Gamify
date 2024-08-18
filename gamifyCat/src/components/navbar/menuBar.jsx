import React from 'react'

const menuBar = ({ menuOpen }) => {
  return (
    <div 
    className={`menuBar w-full fixed top-0 right-0 lg:w-1/2 h-full transition-all duration-300 ${menuOpen ? 'right-0' : 'right-[-100%]'}  flex flex-col justify-between px-16 bg-white`}
>
    <ul className='text-7xl lg:text-6xl  text-center lg:text-start font-semibold mt-20 lg:mt-0 py-20 lg:py-40 text-black'>
        <li className='mb-3'>Home</li>
        <li className='mb-3'>Agency</li>
        <li className='mb-3'>Cases</li>
        <li>Contacts</li>
    </ul>

    <div className='w-full mb-10 lg:mb-20  flex justify-between items-end text-black'>
        <ul>
            <li>108 Waterfront CT SW, <br />Calgary, AB, Canada, T2P1K7</li>
            <li className='py-3'>+9189328494238</li>
            <li>Hello@123.io</li>
        </ul>

        <ul className='flex gap-3 text-xl'>
            <i className="ri-home-office-line cursor-pointer"></i>
            <i className="ri-home-office-line cursor-pointer"></i>
            <i className="ri-home-office-line cursor-pointer"></i>
        </ul>
    </div>
</div>
  )
}

export default menuBar
