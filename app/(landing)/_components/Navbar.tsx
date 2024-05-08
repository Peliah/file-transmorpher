"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { GrMenu, } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useScrollTop from "@/hooks/use-scroll-top";
import { useState } from "react";
import { XIcon } from "lucide-react";


const Navbar = () => {
    const scrolled = useScrollTop()
    const [navClose, setNavClose] = useState(true)
    return (
        // <nav className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center justify-between bg-black w-full p-6", scrolled && "border-b dark:border-b-slate-700 shadow-sm")}>

        // <nav className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center  container p-6", scrolled && "border-b dark:border-b-slate-700 shadow-sm")}>
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="w-1/2">
                <Link href="/">
                    <p className="font-bold text-xl md:text-2xl">File Transmorpher</p>
                </Link>
            </div>
            <div className="md:ml-auto justify-end w-1/2 flex items-center gap-x-2">
                <div className={navClose ? `hidden md:block` : `w-full flex flex-col  text-end self-end absolute shadow-md h-40 top-20 bg-background `}>
                    {/* <div className="hidden md:block "> */}
                    <Link href="/">
                        <Button variant="ghost" className="font-semibold text-md">
                            Home
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost" className="font-semibold text-md">
                            About
                        </Button>
                    </Link>
                    <Link href="/privacy-policy">
                        <Button variant="ghost" className="font-semibold text-md">
                            Privacy Policy
                        </Button>
                    </Link>
                </div>
                <div className="block md:hidden ">
                    {navClose ?
                        <Button variant="ghost" onClick={() => setNavClose(!navClose)}>
                            <GrMenu size={32} />
                        </Button>
                        :
                        <Button variant="ghost" onClick={() => setNavClose(!navClose)}>
                            <XIcon size={32} />
                        </Button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;