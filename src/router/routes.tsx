import {createBrowserRouter} from "react-router-dom";
import ErrorBoundary from "@/utils/ErrorBoundary.tsx";
import HomePage from "@/pages/HomePage.tsx";
import Observer from "@/pages/Observer.tsx";
import CommandPattern from "@/pages/CommandPattern.tsx";
import Singleton from "@/pages/Singleton.tsx";
import FactoryFunctions from "@/pages/FactoryFunctions.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomePage />
        ),
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/command-pattern",
        element: <CommandPattern />,
    },
    {
        path: "/observer",
        element: <Observer />,
    },
    {
        path: "/singleton",
        element: <Singleton />,
    },
    {
        path: "/factory-functions",
        element: <FactoryFunctions />,
    },
]);

export default routes;
