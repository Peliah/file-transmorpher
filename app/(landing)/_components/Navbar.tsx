"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { GrMenu } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useScrollTop from "@/hooks/use-scroll-top";


const Navbar = () => {
    const scrolled = useScrollTop()
    return (
        // <nav className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center justify-between bg-black w-full p-6", scrolled && "border-b dark:border-b-slate-700 shadow-sm")}>

        <nav className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center  container p-6", scrolled && "border-b dark:border-b-slate-700 shadow-sm")}>
            <div className="w-1/2">
                <p className="font-bold text-2xl">File Transmorpher</p>
            </div>
            <div className="md:ml-auto justify-end w-1/2 flex items-center gap-x-2">
                <Button variant={"ghost"} className="font-normal text-lg">
                    Home
                </Button>
                <Button variant={"ghost"} className="font-normal text-lg">
                    About
                </Button>

            </div>
        </nav>
    );
}

export default Navbar;