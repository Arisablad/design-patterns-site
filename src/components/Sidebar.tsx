
function Sidebar(props) {
    return (
        // DESKTOP NAV
        <div className={"hidden w-96 bg-blue-950 min-h-screen md:flex flex-col items-center gap-4"}>
            <div className={"bg-yellow-200 w-full"}>
                <div className={"font-semibold bg-green-600"}>Section</div>
                <ul>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className={"bg-yellow-200 w-full"}>
                <div className={"font-semibold"}>Section</div>
                <ul>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;