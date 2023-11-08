import {createBrowserRouter} from "react-router-dom";
import ErrorBoundary from "@/utils/ErrorBoundary.tsx";
import HomePage from "@/pages/HomePage.tsx";
import Singleton from "@/pages/Singleton.tsx";
import Observer from "@/pages/Observer.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomePage />
        ),
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/singleton",
        element: <Singleton />,
    },
    {
        path: "/observer",
        element: <Observer />,
    },
]);

export default routes;
