import MainLayout from "@/containers/MainLayout.tsx";

function HomePage() {
    return (
        <MainLayout>
            <div className={"w-full text-[rgb(193,193,193)] px-2"}>

                {/*HEADER*/}
                <div className={"border-b border-gray-400 py-20 text-center"}>
                    <h1 className={"text-2xl font-extrabold text-blue-400 mb-4"}>Main Purpose of this site is to help me Learning About design patterns:</h1>
                    <p>I would like to deliver the best quality code possible, <br/>
                        so that the People working with me do it with a smile on their face</p>
                </div>

                <div className={"border-b border-gray-400 py-20 text-center"}>
                    <div>As Long as I'll learn new pattern it will be added to this site.</div>
                    <p>
                    Some design patterns <span className={"text-red-600"}>I will not present on this page </span> if I think they are too obvious - such as <span className={"text-slate-400 font-bold"}>module-pattern.</span> <br />
                    It seems to me that in this day and age of frameworks everyone divides their code into smaller, more manageable components. <br />

                    Also, I won't cover outdated topics unless I find them interesting or useful for building something newer/better. <br />
                    An example is the singleton pattern, which is currently on the site even though it is considered by many to be anti-pattern <br />
                    </p>
                </div>


                <div className={"border-b border-gray-400 py-20 text-center"}>
                    <h2 className={"text-green-600 font-bold text-2xl mb-4"}>Future Plans</h2>
                    <p>
                        In the future, the site will also be expanded to include algorithms that will help us solve many problems in an optimal way. <br/>

                        In addition to <span className={"text-orange-400"}>algorithms</span>, there will also be <span className={"text-orange-400"}>Patterns on frameworks.</span> <br/>
                        Specializing mainly in react also expect patterns such as: <br/>
                        <span className={"text-blue-400"}>Higher Order Components / Render props pattern and more.</span>
                    </p>
                </div>

            </div>
        </MainLayout>
    );
}

export default HomePage;