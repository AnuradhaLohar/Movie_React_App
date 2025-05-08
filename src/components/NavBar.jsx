import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center border bg-gray-800'>
            <div className='text-2xl p-4 pl-20 text-white'>MoviesHub</div>
        <div className='flex justify-end items-center w-200 p-4 text-lg gap-5 pr-40'>
            <ul className='flex justify-center items-center gap-5' >
                <li className='cursor-pointer text-gray-400'>
                  <Link to='/'>Popular</Link>
                  </li>
                <li className='cursor-pointer text-gray-400'> 
                  <Link to = '/toprated'> Top Rated</Link>
                 </li>
                <li className='cursor-pointer text-gray-400'>
                  <Link to='/upcomingmovie'>Upcoming</Link>
                  </li>
            </ul>
            <div className=''>
                <input type="text" placeholder='Movie Name' className='text-gray-900 bg-white rounded text-lg w-45 p-1 pl-4 outline-0' />
            </div>
            <button type="button" className='text-white bg-gray-500 border-0 rounded px-4 py-1'>Search</button>
        </div>
    </div>
  )
}

export default NavBar