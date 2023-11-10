import React, {useState} from 'react';
import {MenuIcon} from "lucide-react";
import {Links} from "@/constants/Links.tsx";
import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";


function TopNavbar() {
    const [expandMenu, setExpandMenu] = useState(false)
    const currentLocation = window.location.pathname
    return (
        <>
            <div className={"fixed top-0 w-full left-0 gradient-background shadow shadow-md py-6 px-4 flex justify-between z-50"}>
                <Link to={"/"} className={"text-2xl text-blue-500 font-semibold font-mono"}>Arisablad Patterns</Link>
                <MenuIcon className={"md:hidden cursor-pointer"} onClick={() => {
                    setExpandMenu(!expandMenu)
                }}/>
            </div>
            {/*LINKS*/}
            {expandMenu &&
                <div className={"bg-gray-800/20 shadow shadow-xl shadow-inner max-h-max md:hidden transition-all duration-[3000] ease-in-out pt-12 text-white"}>
                    {Links.map((section) => {
                        return (
                            <div className={"flex flex-col gap-2 px-1 py-1.5"}>
                                <p className={"text-2xl font-serif"}>{section.section_name}</p>
                                {section.links.map(link => <Link to={link.href} className={cn("flex w-full bg-gray-600 py-2 gap-2 px-1 hover:bg-blue-950/60 rounded-md", currentLocation === link.href && "bg-blue-900")}>
                                    <span className={"text-gray-300"}>{link.icon}</span>
                                    <span>{link.patern_name}</span>
                                </Link>)}
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
}

export default TopNavbar;