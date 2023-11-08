import React, {useState} from "react";
import Sidebar from "@/components/Sidebar.tsx";
import TopNavbar from "@/components/TopNavbar.tsx";

function Layout({children}: { children?: React.ReactNode }) {
    return (
        <>
            {/*NAVIGATION*/}
            <TopNavbar/>
            {/*MaxWidthWrapper*/}
            <div className={"bg-red-300 max-w-6xl ml-auto mr-auto flex"}>
                {/*Sidebar*/}
                <Sidebar/>
                {children}
            </div>

        </>
    );
}

export default Layout;
