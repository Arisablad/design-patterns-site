import {Links} from "@/constants/Links.tsx";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        // DESKTOP NAV
        <div className={"hidden w-96 bg-gray-800/20 shadow shadow-xl shadow-inner min-h-screen md:flex flex-col items-center gap-4 px-4 text-white"}>
            {Links.map((section) => {
                return (
                    <div className={"flex flex-col gap-2 w-full py-4"}>
                        <p>{section.section_name}</p>
                        {section.links.map(link => <Link to={link.href} className={"flex w-full bg-gray-600 rounded-lg py-2 px-1 gap-2 hover:bg-blue-950/60"}>
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