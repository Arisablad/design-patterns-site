import {CommandIcon, SearchCodeIcon} from "lucide-react";

export const Links = [
    {
        section_name: "Patterns",
        links:[
            {
                patern_name:"Observer",
                href: "/observer",
                icon:<SearchCodeIcon/>
            },
            {
                patern_name:"Command-Pattern",
                href: "/command-pattern",
                icon:<CommandIcon/>,
            }
        ]
    },
]