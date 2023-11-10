import {Links} from "@/constants/Links.tsx";
import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

function Sidebar() {
    const currentLocation = window.location.pathname

    return (
        // DESKTOP NAV
        <div className={"hidden w-96 bg-gray-800/20 shadow shadow-xl shadow-inner min-h-screen md:flex flex-col items-center gap-4 px-4 text-white"}>
            {Links.map((section,index) => {
                return (
                    <div key={index} className={"flex flex-col gap-2 w-full py-4"}>
                        <p>{section.section_name}</p>
                        {section.links.map(link => <Link key={link.href} to={link.href} className={cn("flex w-full bg-gray-600 rounded-lg py-2 px-1 gap-2 hover:bg-blue-950/60",
                            link.href === currentLocation && "bg-blue-900"
                        )}>
                            <span>{link.icon}</span>
                            <span>{link.patern_name}</span>
                        </Link>)}
                    </div>
                )
            })}
        </div>
    );
}

export default Sidebar;