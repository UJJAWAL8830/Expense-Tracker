"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideNav = () => {

    const menuList = [
        {
            id : 1,
            name : "Dashboard",
            icon : LayoutGrid,
            path : "/dashboard"
        } ,
        {
            id : 2,
            name : "Budgets",
            icon : PiggyBank,
            path : "/dashboard/budgets"
        } ,
        {
            id : 3,
            name : "Expenses",
            icon : ReceiptText,
            path : "/dashboard/expenses"
        } ,
        {
            id : 4,
            name : "Upgrade",
            icon : ShieldCheck,
            path : "/dashboard/upgrade"
        } ,
    ];

    //Using Hook to get current path
    const activePath = usePathname();


  return (
      <div className="h-screen p-6 shadow-gray-600 shadow-lg ">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />

          <div className="mt-10 flex flex-col gap-4">
              {menuList.map((menu) => (
                <Link key={menu.id} href={menu.path}>
                  <h2
                      key={menu.id}
                      className={`flex items-center gap-4 cursor-pointer 
                text-gray-600 font-medium p-5 rounded-md hover:text-blue-800 hover:bg-blue-100  transition-all 
                ${activePath === menu.path && "text-purple-800 bg-blue-100" }
                `}>
                      <menu.icon />
                      <span>{menu.name}</span>
                  </h2>
                  </Link>
              ))}
          </div>

          <div className="mt-10 fixed bottom-10 p-5 flex gap-2 items-center bg-gray-100 rounded-md">
              <UserButton />
              Profile
          </div>
      </div>
  );
}

export default SideNav