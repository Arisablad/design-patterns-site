import React from "react";
import Sidebar from "@/components/Sidebar.tsx";
import TopNavbar from "@/components/TopNavbar.tsx";

function Layout({children}: { children?: React.ReactNode }) {
    return (
        <>
            {/*NAVIGATION*/}
            <TopNavbar/>
            {/*MaxWidthWrapper*/}
            <div className={"gradient-background max-w-6xl ml-auto mr-auto flex shadow shadow-2xl shadow-gray-700"}>
                {/*Sidebar*/}
                <Sidebar/>
                {children}
            </div>
            <div className={"flex items-center justify-center"}>Coded By Arisablad</div>

        </>
    );
}

export default Layout;
