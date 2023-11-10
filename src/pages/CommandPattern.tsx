import MainLayout from "@/containers/MainLayout.tsx";


function CommandPattern() {
    return (
        <MainLayout>
            <div className={"w-full text-[rgb(193,193,193)] px-2"}>

                {/*HEADER*/}
                <div className={"border-b border-gray-400 py-20"}>
                    <h1>Command Pattern</h1>
                </div>

            </div>
        </MainLayout>
    );
}

export default CommandPattern;