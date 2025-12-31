import Image from 'next/image'
import React from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, User } from 'lucide-react';

const SideNav = () => {

    const menuList = [
        {
            id : 1,
            name : "Dashboard",
            icon : LayoutGrid,
        } ,
        {
            id : 2,
            name : "Budgets",
            icon : PiggyBank,
        } ,
        {
            id : 3,
            name : "Expenses",
            icon : ReceiptText,
        } ,
        {
            id : 4,
            name : "Upgrade",
            icon : ShieldCheck,
        } ,


    ];

  return (
    <div className='h-screen p-6 shadow-gray-600 shadow-lg '>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />

        <div className="mt-10 flex flex-col gap-4">
            {menuList.map((menu) => (
                <div key={menu.id} className="flex items-center gap-4 cursor-pointer 
                text-gray-600 font-medium p-5 rounded-md hover:text-blue-800 hover:bg-blue-100  transition-colors">
                    <menu.icon />       
                    <span>{menu.name}</span>
                </div>
            ))}
        </div>

        <div className="mt-10">
            <UserButton />
        </div>
    </div>
  )
}

export default SideNav