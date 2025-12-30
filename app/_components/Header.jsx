import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className = "p-5 flex justify-between items-center shadow-lg">
        <Image 
            src = {"/logo.svg"}
            alt = "Logo"
            width = {72}
            height = {40}
        />
        <Button className="bg-black text-white cursor-pointer">Get Started</Button>
    </div>
  )
}

export default Header