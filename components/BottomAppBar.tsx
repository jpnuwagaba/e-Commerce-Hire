import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import {TbListSearch, TbLocation} from 'react-icons/tb'
import {HiRectangleGroup} from 'react-icons/hi2'
import {MdOutlineAccountCircle} from 'react-icons/md'
import Link from 'next/link'

const BottomAppBar = () => {
  return (
    <div className='fixed bottom-0 w-full py-3 rounded-lg z-40'>
      <div className='flex justify-between items-baseline w-[90%] mx-auto'>
        <Link href={'home'} className="flex flex-col items-center text-prussianBlue">
          <HiOutlineHome size={'1.5em'} />
          <div className="text-[11.5px] font-bold">Home</div>
        </Link>
        <Link href={'explore'} className="flex flex-col items-center text-prussianBlue">
          <TbListSearch size={'1.5em'} />
          <div className="text-[11.5px] font-bold">Explore</div>
        </Link>
        <Link href={'myList'} className="flex flex-col items-center text-prussianBlue">
          <HiRectangleGroup size={'1.5em'} />
          <div className="text-[11.5px] font-bold">My List</div>
        </Link>
        <Link href={'locations'} className="flex flex-col items-center text-prussianBlue">
          <TbLocation size={'1.5em'} />
          <div className="text-[11.5px] font-bold">Locations</div>
        </Link>
        <Link href={'accountPage'} className="flex flex-col items-center text-prussianBlue">
          <MdOutlineAccountCircle size={'1.5em'} />
          <div className="text-[11.5px] font-bold">Account</div>
        </Link>
      </div>
    </div>
  )
}

export default BottomAppBar