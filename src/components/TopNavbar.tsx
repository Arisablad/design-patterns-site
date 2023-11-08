import React, {useState} from 'react';
import {MenuIcon} from "lucide-react";

function TopNavbar() {
    const [expandMenu, setExpandMenu] = useState(false)
    return (
        <>
            <div className={"fixed top-0 w-full left-0 bg-green-600 py-6 px-4 flex justify-between"}>
                {/*LINKS*/}
                <div>Links</div>
                <MenuIcon className={"md:hidden cursor-pointer"} onClick={() => {
                    setExpandMenu(!expandMenu)
                }}/>
            </div>
            {expandMenu &&
                <div className={"bg-white max-h-max md:hidden transition-all duration-[3000] ease-in-out"}>
                    some Links
                </div>
            }
        </>
    );
}

export default TopNavbar;