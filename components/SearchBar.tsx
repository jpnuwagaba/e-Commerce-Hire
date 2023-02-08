import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {HiBars3BottomRight} from 'react-icons/hi2'

const SearchBar = () => {
  return (
    <div className=''>
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-3 items-center bg-gray-100 p-3 rounded-lg w-full">
          <RiSearch2Line />
          <div>
            <form action="">
              <input type="text" placeholder='Search...' className='font-inter bg-gray-100 outline-none'/>
            </form>
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'><HiBars3BottomRight /></div>
      </div>
    </div>
  )
}

export default SearchBar