import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashBoardHeader = () => {
  return (
    <div className= "p-6 shadow-sm shadow-gray-400 border-b  flex justify-between items-center">
        <div className="">SearchBar</div>
        <div className=""><UserButton /></div>
    </div>
  )
}

export default DashBoardHeader