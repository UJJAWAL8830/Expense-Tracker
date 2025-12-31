"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
    const { user, isSignedIn } = useUser();

    return (
        <div className="p-5 flex justify-between items-center shadow-lg mb-1">
            <Image src={"/logo.svg"} alt="Logo" width={72} height={40} />

            {isSignedIn ? (
                <UserButton />
            ) : (
                <Link href="/sign-in">
                    <Button className="bg-black text-white cursor-pointer">
                        Get Started
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default Header;
