import MainLayout from "@/containers/MainLayout.tsx";

function Singleton() {
    return (
        <MainLayout>
        <div className={"w-full"}>Singleton</div>
        </MainLayout>
    );
}

export default Singleton;